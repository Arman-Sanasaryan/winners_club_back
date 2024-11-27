import { Body, Controller, Get, Param, Patch } from "@nestjs/common";
import { UserService } from "./user.service";
import { User, UserDocument } from "./user.schema";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Define endpoints for user management if needed
  @Get()
  async getAllUsers(): Promise<UserDocument[]> {
    return this.userService.getAllUsers();
  }

  @Get(":userId")
  async getUserById(@Param("userId") userId: string) {
    return this.userService.getUserById(userId);
  }

  @Patch(":userId")
  async patchUser(
    @Param("userId") userId: string,
    @Body() patch: Partial<User>
  ): Promise<UserDocument> {
    return this.userService.updateUserData(userId, patch);
  }
}
