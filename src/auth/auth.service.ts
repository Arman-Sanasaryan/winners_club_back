import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<any> {
    const { username, email, password, accessKey } = createUserDto;

    const normalizedEmail = email.toLowerCase();

    const existingUser = await this.userModel.findOne({ email: normalizedEmail });
    if (existingUser) {
      existingUser.accessKey = accessKey;
      existingUser.accessKeyCreatedAt = new Date();
      await existingUser.save();
      return this.login(existingUser);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      username,
      email: normalizedEmail,
      password: hashedPassword,
      accessKey,
      accessKeyCreatedAt: new Date(),
    });

    await user.save();
    return this.login(user);
  }

  async login(user: any) {
    if (user.accessKeyCreatedAt) {
      const now = new Date();
      const accessKeyAge = now.getTime() - user.accessKeyCreatedAt.getTime();
      if (accessKeyAge > 300 * 24 * 60 * 60 * 1000) {
        throw new UnauthorizedException('Access key expired');
      }
    }

    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload, { expiresIn: '1h' }),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '3d' }),
      userId: user._id,
    };
  }

  async refresh(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const newAccessToken = this.jwtService.sign(
        { username: payload.username, sub: payload.sub },
        { expiresIn: '1h' },
      );

      const newRefreashToken = this.jwtService.sign(
        { username: payload.username, sub: payload.sub },
        { expiresIn: '3d' },
      );
      return { access_token: newAccessToken, refresh_token: newRefreashToken };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    if (user) {
      const now = new Date();
      const accessKeyAge = now.getTime() - user.accessKeyCreatedAt.getTime();
      if (accessKeyAge > 300 * 24 * 60 * 60 * 1000) {
        throw new UnauthorizedException('Access key expired');
      }
      const { ...result } = user.toObject();
      return result;
    }
    return null;
  }
}
