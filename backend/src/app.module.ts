import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ConfigModule } from '@nestjs/config';
import { EncryptionModule } from './encryption/encryption.module.js';
import { CredentialGroupsModule } from './credential-groups/credential-groups.module.js';
import { CredentialCategoriesModule } from './credential-categories/credential-categories.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { CredentialsModule } from './credentials/credentials.module.js';



export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    EncryptionModule,
    CredentialGroupsModule,
    CredentialCategoriesModule,
    UsersModule,
    AuthModule,
    CredentialsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
