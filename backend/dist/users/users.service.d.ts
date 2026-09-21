import { PrismaService } from '../prisma/prisma.service.js';
import { User } from '../generated/prisma/client.js';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByUsername(username: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}
