import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  return {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    rabbitmqUrl: process.env.RABBITMQ_URL,
  };
});
