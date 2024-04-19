/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { SeedService } from './seed.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post('admin')
  async seedAdmin(@Body() createUserDto: CreateUserDto, username:string) {
    return this.seedService.seedAdmin(createUserDto, username);
  }
}
