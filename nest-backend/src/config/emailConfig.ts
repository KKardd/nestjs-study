import { registerAs } from '@nestjs/config';

export default registerAs('email', () => ({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PW,
  },
  baseUrl: process.env.EMAIL_BASE_URL,
}));
