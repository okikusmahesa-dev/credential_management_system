var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsOptional, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';
export class CreateCredentialDto {
    name;
    username;
    password;
    groupId;
    categoryId;
    url;
    notes;
}
__decorate([
    IsString(),
    MinLength(1),
    MaxLength(150),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "name", void 0);
__decorate([
    IsString(),
    MaxLength(255),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "username", void 0);
__decorate([
    IsString(),
    MinLength(1),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "password", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "groupId", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "categoryId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(1000),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "url", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(5000),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "notes", void 0);
//# sourceMappingURL=create-credential.dto.js.map