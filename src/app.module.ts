import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv'
import { UserModule } from './modules/user/user.module';
import { MongoCollectionsModule } from './database/collections.module';

dotenv.config()
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
    MongoCollectionsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
