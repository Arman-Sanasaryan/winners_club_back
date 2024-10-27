"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../user/user.schema");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.validAccessKey = 'arm123$';
    }
    async signUp(createUserDto) {
        const { username, email, password, accessKey } = createUserDto;
        if (accessKey !== this.validAccessKey) {
            throw new common_1.BadRequestException('Invalid access key');
        }
        const isUserExists = await this.userModel.findOne({ email });
        if (isUserExists) {
            throw new common_1.UnauthorizedException('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new this.userModel({
            username,
            email,
            password: hashedPassword,
            accessKey,
        });
        await user.save();
        return this.login(user);
    }
    async login(user) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload, { expiresIn: '1h' }),
            refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
            userId: user._id,
        };
    }
    async refresh(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken);
            const newAccessToken = this.jwtService.sign({ username: payload.username, sub: payload.sub }, { expiresIn: '1h' });
            const newRefreashToken = this.jwtService.sign({ username: payload.username, sub: payload.sub }, { expiresIn: '7h' });
            return { access_token: newAccessToken, refresh_token: newRefreashToken };
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    async validateUser(username, pass) {
        const user = await this.userModel.findOne({ username });
        if (user && (await bcrypt.compare(pass, user.password))) {
            const { password, ...result } = user.toObject();
            return result;
        }
        return null;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map