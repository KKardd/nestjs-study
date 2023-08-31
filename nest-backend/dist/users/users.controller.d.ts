import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/login-user.dto';
import { UserInfo } from './dto/user-info.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(dto: CreateUserDto): Promise<void>;
    verifyEmail(dto: VerifyEmailDto): Promise<string>;
    login(dto: UserLoginDto): Promise<string>;
    getUserInfo(userId: string): Promise<UserInfo>;
}
