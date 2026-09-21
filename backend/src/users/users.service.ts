import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { User } from '../generated/prisma/client.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        username,
        deletedAt: null,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });
  }
}