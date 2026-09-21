import { PrismaService } from './prisma.service.js';
export declare class PrismaController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    database(): Promise<{
        status: string;
    }>;
}
