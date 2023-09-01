import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailService } from 'src/email/email.service';
import { UserInfo } from './dto/user-info.dto';

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

  async verifyEmail(signupVerifyToken: string): Promise<any> {
    // TODO DB에서 signupVerifyToken로 회원가입중인 유저가 있는지 조회 -> 없다면 에러처리
    // 바로 로그인 상태가 되도록 JWT토큰 발급

    throw new Error('Method not implemented!'); // 반환값 수정
  }

  async login(email: string, password: string): Promise<any> {
    // TODO DB연동 후, email에 맞는 password의 사람이 있는지 확인하고 없으면 에러
    // 있으면 JWT토근 발급

    throw new Error('Method not implemented!'); // 반환값 수정
  }

  async getUserInfo(userId: string): Promise<UserInfo> {
    // TODO DB연동 후, userId 확인. 해당 userId 없으면 에러
    // 있다면 UserInfo형식으로 응답

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
