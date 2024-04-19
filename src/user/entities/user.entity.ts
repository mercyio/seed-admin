/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true})
  username: string;

  @Prop({ select: false })
  password: string;

  @Prop({ default: false })
  isAdmin: boolean;

  //   @Prop({ enum: UserRoleEnum, default: UserRoleEnum.USER })
  //   role: UserRoleEnum;
}

export const UserSchema = SchemaFactory.createForClass(User);
