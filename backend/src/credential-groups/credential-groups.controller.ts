import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import { CurrentUser } from '../common/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import type { AuthenticatedUser } from '../auth/types/auth.types.js';

import { CreateCredentialGroupDto } from './dto/create-credential-group.dto.js';
import { CredentialGroupQueryDto } from './dto/credential-group-query.dto.js';
import { UpdateCredentialGroupDto } from './dto/update-credential-group.dto.js';
import { CredentialGroupsService } from './credential-groups.service.js';

@Controller('credential-groups')
@UseGuards(JwtAuthGuard)
export class CredentialGroupsController {
  constructor(
    private readonly service: CredentialGroupsService,
  ) {}

  @Post()
  async create(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: CreateCredentialGroupDto,
  ) {
    return this.service.create(user.id, dto);
  }

@Get()
async findAll(
  @CurrentUser() user: AuthenticatedUser,
  @Query() query: CredentialGroupQueryDto,
) {
  return this.service.findAll(user.id, query);
}

  @Get('menu')
  async menu(
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.service.getMenu(user.id);
  }

  @Get(':id')
  async findOne(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id') id: string,
  ) {
    return this.service.findOne(user.id, id);
  }

  @Patch(':id')
  async update(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id') id: string,
    @Body() dto: UpdateCredentialGroupDto,
  ) {
    return this.service.update(user.id, id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id') id: string,
  ): Promise<void> {
    await this.service.remove(user.id, id);
  }
}