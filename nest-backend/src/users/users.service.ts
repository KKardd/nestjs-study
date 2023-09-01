import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class UsersService {
  constructor(
    private emailService: EmailService,
    private configService: ConfigService,
  ) {}

  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);
  }

  private checkUserExists(email: string) {
    return false; // TODO: DB연동 후 구현
  }

  private saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    return; // TODO: DB연동 후 구현
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }
}
