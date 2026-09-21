import { IsOptional, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class UpdateCredentialDto {
	@IsOptional() @IsString() @MinLength(1) @MaxLength(150) name?: string;
	@IsOptional() @IsString() @MaxLength(255) username?: string;
	@IsOptional() @IsString() @MinLength(1) password?: string;
	@IsOptional() @IsUUID() groupId?: string;
	@IsOptional() @IsUUID() categoryId?: string;
	@IsOptional() @IsString() @MaxLength(1000) url?: string;
	@IsOptional() @IsString() @MaxLength(5000) notes?: string;
}
