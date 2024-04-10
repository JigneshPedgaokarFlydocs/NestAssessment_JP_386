import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from '../entities/user.entity';
import { UUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(uniqueId: UUID): Promise<User> {
    return this.userRepository.findOne({ where: { uniqueId } });
  }

  async create(user: Partial<User>): Promise<User> {
    const newuser = this.userRepository.create(user);
    return this.userRepository.save(newuser);
  }

  async update(uniqueId: UUID, user: Partial<User>): Promise<User> {
    await this.userRepository.update(uniqueId, user);
    return this.userRepository.findOne({ where: { uniqueId } });
  }

  async delete(uniqueId: UUID): Promise<void> {
    await this.userRepository.delete(uniqueId);
  }
}