import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { UsersService } from '../users/users.service.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(
    loginDto: LoginDto,
  ): Promise<{ accessToken: string }> {
    const user = await this.usersService.findByUsername(
      loginDto.username,
    );

    if (!user) {
      throw new UnauthorizedException(
        'Invalid username or password',
      );
    }

    const passwordValid = await bcrypt.compare(
      loginDto.password,
      user.passwordHash,
    );

    if (!passwordValid) {
      throw new UnauthorizedException(
        'Invalid username or password',
      );
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      username: user.username,
      email: user.email,
    });

    return {
      accessToken,
    };
  }
}