/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(private readonly userService: UserService,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async seedAdmin(createUserDto: CreateUserDto, username: string) {
    const existingUser = await this.userService.findOneByUsername(
      createUserDto.username,
    );

    if (existingUser) {
     await this.userService.updateUserByUsername( username, {isAdmin: true}) 
    }                                                                                                                              
 
    const adminUser = await this.userModel.create({  
      ...createUserDto,
      isAdmin: true,
    });
    return { message: 'Admin user seeded successfully.', adminUser };
  }
}   
