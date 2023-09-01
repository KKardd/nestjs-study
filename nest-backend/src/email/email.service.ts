import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as nodemailer from 'nodemailer';
import Mail = require('nodemailer/lib/mailer');

interface EmailOption {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;
  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_ID'),
        pass: this.configService.get<string>('EMAIL_PW'),
      },
    });
  }
  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = 'http://loaclhost:3000';

    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const mailOptions: EmailOption = {
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `
        가입확인 버튼를 누르시면 가입 인증이 완료됩니다.<br/>
        <form action="${url}" method="POST">
          <button>가입확인</button>
        </form>
      `,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
