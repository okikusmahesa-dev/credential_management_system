import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service.js';
import { LoginDto } from './dto/login.dto.js';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
}
