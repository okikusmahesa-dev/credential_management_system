import {
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCredentialGroupDto {
  @IsString()
  @MinLength(1)
  @MaxLength(150)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsUUID()
  parentId?: string;
}