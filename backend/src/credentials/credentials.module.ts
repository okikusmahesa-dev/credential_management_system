import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { EncryptionModule } from '../encryption/encryption.module.js';
import { CredentialsController } from './credentials.controller.js';
import { CredentialsRepository } from './credentials.repository.js';
import { CredentialsService } from './credentials.service.js';

@Module({ imports: [AuthModule, EncryptionModule], controllers: [CredentialsController], providers: [CredentialsRepository, CredentialsService] })
export class CredentialsModule {}
