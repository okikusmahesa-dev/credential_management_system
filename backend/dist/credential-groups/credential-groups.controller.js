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
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, UseGuards, } from '@nestjs/common';
import { CurrentUser } from '../common/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateCredentialGroupDto } from './dto/create-credential-group.dto.js';
import { CredentialGroupQueryDto } from './dto/credential-group-query.dto.js';
import { UpdateCredentialGroupDto } from './dto/update-credential-group.dto.js';
import { CredentialGroupsService } from './credential-groups.service.js';
let CredentialGroupsController = class CredentialGroupsController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(user, dto) {
        return this.service.create(user.id, dto);
    }
    async findAll(user, query) {
        return this.service.findAll(user.id, query);
    }
    async menu(user) {
        return this.service.getMenu(user.id);
    }
    async findOne(user, id) {
        return this.service.findOne(user.id, id);
    }
    async update(user, id, dto) {
        return this.service.update(user.id, id, dto);
    }
    async remove(user, id) {
        await this.service.remove(user.id, id);
    }
};
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateCredentialGroupDto]),
    __metadata("design:returntype", Promise)
], CredentialGroupsController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CredentialGroupQueryDto]),
    __metadata("design:returntype", Promise)
], CredentialGroupsController.prototype, "findAll", null);
__decorate([
    Get('menu'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CredentialGroupsController.prototype, "menu", null);
__decorate([
    Get(':id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CredentialGroupsController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateCredentialGroupDto]),
    __metadata("design:returntype", Promise)
], CredentialGroupsController.prototype, "update", null);
__decorate([
    Delete(':id'),
    HttpCode(HttpStatus.NO_CONTENT),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CredentialGroupsController.prototype, "remove", null);
CredentialGroupsController = __decorate([
    Controller('credential-groups'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [CredentialGroupsService])
], CredentialGroupsController);
export { CredentialGroupsController };
//# sourceMappingURL=credential-groups.controller.js.map