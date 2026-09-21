import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { CredentialCategoriesController } from './credential-categories.controller.js';
import { CredentialCategoriesRepository } from './credential-categories.repository.js';
import { CredentialCategoriesService } from './credential-categories.service.js';

@Module({ imports: [AuthModule], controllers: [CredentialCategoriesController], providers: [CredentialCategoriesRepository, CredentialCategoriesService], exports: [CredentialCategoriesService] })
export class CredentialCategoriesModule {}
