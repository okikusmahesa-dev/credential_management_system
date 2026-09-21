import { ConfigService } from '@nestjs/config';
export declare class EncryptionService {
    private readonly configService;
    private readonly algorithm;
    private readonly key;
    constructor(configService: ConfigService);
    encrypt(value: string): string;
    decrypt(encryptedValue: string): string;
}
