import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDocument } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Define endpoints for user management if needed
  @Get()
  async getAllUsers(): Promise<UserDocument[]> {
    return this.userService.getAllUsers();
  }
}
