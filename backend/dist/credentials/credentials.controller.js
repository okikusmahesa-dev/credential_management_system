var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CurrentUser } from '../common/decorators/current-user.decorator.js';
import { CreateCredentialDto } from './dto/create-credential.dto.js';
import { CredentialQueryDto } from './dto/credential-query.dto.js';
import { UpdateCredentialDto } from './dto/update-credential.dto.js';
import { CredentialsService } from './credentials.service.js';
let CredentialsController = class CredentialsController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(user, dto) { return this.service.create(user.id, dto); }
    findAll(user, query) { return this.service.findAll(user.id, query); }
    findOne(user, id) { return this.service.findOne(user.id, id); }
    update(user, id, dto) { return this.service.update(user.id, id, dto); }
    async remove(user, id) { await this.service.remove(user.id, id); }
};
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateCredentialDto]),
    __metadata("design:returntype", void 0)
], CredentialsController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CredentialQueryDto]),
    __metadata("design:returntype", void 0)
], CredentialsController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CredentialsController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateCredentialDto]),
    __metadata("design:returntype", void 0)
], CredentialsController.prototype, "update", null);
__decorate([
    Delete(':id'),
    HttpCode(HttpStatus.NO_CONTENT),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "remove", null);
CredentialsController = __decorate([
    Controller('credentials'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [CredentialsService])
], CredentialsController);
export { CredentialsController };
//# sourceMappingURL=credentials.controller.js.map