/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
// import { SeedModule } from 'src/seed/seed.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
    ]),
    // SeedModule
  ],
  
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
