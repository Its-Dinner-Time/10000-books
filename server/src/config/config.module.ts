import { ConfigModule } from '@nestjs/config';

// isGlobal: proccess.env.NAME 전역 사용 가능
const isGlobal = true;
// envFilePath: 불러올 env file 이름
const envFilePath = process.env.NODE_ENV === 'dev' ? '.dev.env' : '.test.dev';
// ignoreEnvFile:  env file 무시 옵션
const ignoreEnvFile = process.env.NODE_ENV === 'prod';

export default ConfigModule.forRoot({
  isGlobal,
  envFilePath,
  ignoreEnvFile,
});
