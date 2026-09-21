import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Controller('health')
export class PrismaController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('database')
  async database(): Promise<{ status: string }> {
    await this.prisma.$queryRaw`SELECT 1`;

    return {
      status: 'ok',
    };
  }
}