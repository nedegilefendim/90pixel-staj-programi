import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './user.controller';
import {UserService} from "./user.service";
import { UserSeeder } from './user.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserSeeder],
  controllers: [UsersController],
})
export class UserModule {}
