import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module.js';
import { CredentialGroupsController } from './credential-groups.controller.js';
import { CredentialGroupsRepository } from './credential-groups.repository.js';
import { CredentialGroupsService } from './credential-groups.service.js';

@Module({
  imports: [
    AuthModule,
  ],
  controllers: [
    CredentialGroupsController,
  ],
  providers: [
    CredentialGroupsRepository,
    CredentialGroupsService,
  ],
  exports: [
    CredentialGroupsService,
  ],
})
export class CredentialGroupsModule {}