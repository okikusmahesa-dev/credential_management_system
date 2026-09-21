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
import { CurrentUser } from '../common/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateCredentialCategoryDto } from './dto/create-credential-category.dto.js';
import { CredentialCategoryQueryDto } from './dto/credential-category-query.dto.js';
import { UpdateCredentialCategoryDto } from './dto/update-credential-category.dto.js';
import { CredentialCategoriesService } from './credential-categories.service.js';
let CredentialCategoriesController = class CredentialCategoriesController {
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
    __metadata("design:paramtypes", [Object, CreateCredentialCategoryDto]),
    __metadata("design:returntype", void 0)
], CredentialCategoriesController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CredentialCategoryQueryDto]),
    __metadata("design:returntype", void 0)
], CredentialCategoriesController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CredentialCategoriesController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateCredentialCategoryDto]),
    __metadata("design:returntype", void 0)
], CredentialCategoriesController.prototype, "update", null);
__decorate([
    Delete(':id'),
    HttpCode(HttpStatus.NO_CONTENT),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CredentialCategoriesController.prototype, "remove", null);
CredentialCategoriesController = __decorate([
    Controller('credential-categories'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [CredentialCategoriesService])
], CredentialCategoriesController);
export { CredentialCategoriesController };
//# sourceMappingURL=credential-categories.controller.js.map