import { EmailService } from 'src/email/email.service';
export declare class UsersService {
    private emailService;
    constructor(emailService: EmailService);
    createUser(name: string, email: string, password: string): Promise<void>;
    private checkUserExists;
    private saveUser;
    private sendMemberJoinEmail;
}
