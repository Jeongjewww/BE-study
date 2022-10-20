"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesApiController = void 0;
const common_1 = require("@nestjs/common");
let MoviesApiController = class MoviesApiController {
    getAll() {
        return 'This will return all movies';
    }
    getOne(movieID) {
        return `This will return one movie with the id: ${movieID}`;
    }
    create() {
        return 'This will create a movie';
    }
    remove(movieID) {
        return `This will delete a movie with the id: ${movieID}`;
    }
    path(movieID) {
        return `This will patch a movie with the id: ${movieID}`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], MoviesApiController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesApiController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoviesApiController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesApiController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesApiController.prototype, "path", null);
MoviesApiController = __decorate([
    (0, common_1.Controller)('movies-api')
], MoviesApiController);
exports.MoviesApiController = MoviesApiController;
//# sourceMappingURL=movies-api.controller.js.map