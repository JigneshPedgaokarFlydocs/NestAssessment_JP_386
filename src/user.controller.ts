import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import {User} from '../entities/user.entity';
import { UUID } from 'crypto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  //get all users
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  //get user by id
  @Get(':id')
  async findOne(@Param('uniqueId') uniqueId: UUID): Promise<User> {
    const user = await this.usersService.findOne(uniqueId);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  //create user
  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  //update user
  @Put(':uniqueId')
  async update (@Param('uniqueId') uniqueId: UUID, @Body() user: User): Promise<any> {
    return this.usersService.update(uniqueId, user);
  }

  //delete user
  @Delete(':uniqueId')
  async delete(@Param('uniqueId') uniqueId: UUID): Promise<any> {
    //handle error if user does not exist
    const user = await this.usersService.findOne(uniqueId);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.usersService.delete(uniqueId);
  }
}