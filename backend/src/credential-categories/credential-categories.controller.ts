import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../common/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import type { AuthenticatedUser } from '../auth/types/auth.types.js';
import { CreateCredentialCategoryDto } from './dto/create-credential-category.dto.js';
import { CredentialCategoryQueryDto } from './dto/credential-category-query.dto.js';
import { UpdateCredentialCategoryDto } from './dto/update-credential-category.dto.js';
import { CredentialCategoriesService } from './credential-categories.service.js';

@Controller('credential-categories')
@UseGuards(JwtAuthGuard)
export class CredentialCategoriesController {
  constructor(private readonly service: CredentialCategoriesService) {}
  @Post() create(@CurrentUser() user: AuthenticatedUser, @Body() dto: CreateCredentialCategoryDto) { return this.service.create(user.id, dto); }
  @Get() findAll(@CurrentUser() user: AuthenticatedUser, @Query() query: CredentialCategoryQueryDto) { return this.service.findAll(user.id, query); }
  @Get(':id') findOne(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string) { return this.service.findOne(user.id, id); }
  @Patch(':id') update(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string, @Body() dto: UpdateCredentialCategoryDto) { return this.service.update(user.id, id, dto); }
  @Delete(':id') @HttpCode(HttpStatus.NO_CONTENT) async remove(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string): Promise<void> { await this.service.remove(user.id, id); }
}
