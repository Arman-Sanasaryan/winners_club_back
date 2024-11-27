import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAllUsers(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async getUserById(userId: string): Promise<UserDocument> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException(`User not found`);
    }
    return user;
  }

  async updateUserData(userId: string, patch: Partial<User>): Promise<UserDocument> {
    if (patch.password) {
      patch.password = await bcrypt.hash(patch.password, 10);
    }
    const user = await this.userModel.findByIdAndUpdate(userId, patch, { new: true }).exec();
    if (!user) {
      throw new NotFoundException(`User not found`);
    }
    return user;
  }
}
