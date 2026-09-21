import { IsOptional, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateCredentialDto {
  @IsString() @MinLength(1) @MaxLength(150) name!: string;
  @IsString() @MaxLength(255) username!: string;
  @IsString() @MinLength(1) password!: string;
  @IsUUID() groupId!: string;
  @IsUUID() categoryId!: string;
  @IsOptional() @IsString() @MaxLength(1000) url?: string;
  @IsOptional() @IsString() @MaxLength(5000) notes?: string;
}
