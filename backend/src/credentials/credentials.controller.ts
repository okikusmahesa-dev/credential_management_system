import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CurrentUser } from '../common/decorators/current-user.decorator.js';
import type { AuthenticatedUser } from '../auth/types/auth.types.js';
import { CreateCredentialDto } from './dto/create-credential.dto.js';
import { CredentialQueryDto } from './dto/credential-query.dto.js';
import { UpdateCredentialDto } from './dto/update-credential.dto.js';
import { CredentialsService } from './credentials.service.js';

@Controller('credentials')
@UseGuards(JwtAuthGuard)
export class CredentialsController {
  constructor(private readonly service: CredentialsService) {}
  @Post() create(@CurrentUser() user: AuthenticatedUser, @Body() dto: CreateCredentialDto) { return this.service.create(user.id, dto); }
  @Get() findAll(@CurrentUser() user: AuthenticatedUser, @Query() query: CredentialQueryDto) { return this.service.findAll(user.id, query); }
  @Get(':id') findOne(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string) { return this.service.findOne(user.id, id); }
  @Patch(':id') update(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string, @Body() dto: UpdateCredentialDto) { return this.service.update(user.id, id, dto); }
  @Delete(':id') @HttpCode(HttpStatus.NO_CONTENT) async remove(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string): Promise<void> { await this.service.remove(user.id, id); }
}
