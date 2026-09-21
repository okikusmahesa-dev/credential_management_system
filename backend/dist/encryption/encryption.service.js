var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, InternalServerErrorException, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createCipheriv, createDecipheriv, randomBytes, } from 'node:crypto';
let EncryptionService = class EncryptionService {
    configService;
    algorithm = 'aes-256-gcm';
    key;
    constructor(configService) {
        this.configService = configService;
        const keyString = this.configService.get('CREDENTIAL_ENCRYPTION_KEY');
        if (!keyString) {
            throw new Error('CREDENTIAL_ENCRYPTION_KEY is not configured');
        }
        const key = Buffer.from(keyString, 'base64');
        if (key.length !== 32) {
            throw new Error('CREDENTIAL_ENCRYPTION_KEY must be exactly 32 bytes in base64');
        }
        this.key = key;
    }
    encrypt(value) {
        try {
            const iv = randomBytes(12);
            const cipher = createCipheriv(this.algorithm, this.key, iv);
            const encrypted = Buffer.concat([
                cipher.update(value, 'utf8'),
                cipher.final(),
            ]);
            const authTag = cipher.getAuthTag();
            return [
                iv.toString('base64'),
                authTag.toString('base64'),
                encrypted.toString('base64'),
            ].join('.');
        }
        catch {
            throw new InternalServerErrorException('Failed to encrypt credential');
        }
    }
    decrypt(encryptedValue) {
        try {
            const parts = encryptedValue.split('.');
            if (parts.length !== 3) {
                throw new Error('Invalid encrypted value');
            }
            const [ivBase64, authTagBase64, encryptedBase64] = parts;
            if (!ivBase64 || !authTagBase64 || !encryptedBase64) {
                throw new Error('Invalid encrypted value');
            }
            const iv = Buffer.from(ivBase64, 'base64');
            const authTag = Buffer.from(authTagBase64, 'base64');
            const encrypted = Buffer.from(encryptedBase64, 'base64');
            const decipher = createDecipheriv(this.algorithm, this.key, iv);
            decipher.setAuthTag(authTag);
            const decrypted = Buffer.concat([
                decipher.update(encrypted),
                decipher.final(),
            ]);
            return decrypted.toString('utf8');
        }
        catch {
            throw new InternalServerErrorException('Failed to decrypt credential');
        }
    }
};
EncryptionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], EncryptionService);
export { EncryptionService };
//# sourceMappingURL=encryption.service.js.map