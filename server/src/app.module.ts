import { Module } from '@nestjs/common';
import configModule from './config/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    configModule, //
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
