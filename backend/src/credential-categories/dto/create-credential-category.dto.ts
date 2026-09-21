import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCredentialCategoryDto {
  @IsString()
  @MinLength(1)
  @MaxLength(150)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;
}
