import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository, UserRepositoryImpl } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepositoryImpl])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
