import * as uuid from 'uuid';
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

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private checkUserExists(email: string) {
    return false; // TODO: DB연동 후 구현
  }

  async verifyEmail(signupVerifyToken: string) {
    // TODO DB에서 signupVerifyToken로 회원가입중인 유저가 있는지 조회 -> 없다면 에러처리
    // 바로 로그인 상태가 되도록 JWT토큰 발급

    throw new Error('Method not implemented!');
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
