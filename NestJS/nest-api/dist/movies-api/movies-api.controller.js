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
const movie_entity_1 = require("./entities/movie.entity");
const movies_api_service_1 = require("./movies-api.service");
let MoviesApiController = class MoviesApiController {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    getAll() {
        return this.moviesService.getAll();
    }
    getOne(movieID) {
        return this.moviesService.getOne(movieID);
    }
    create(movieData) {
        return this.moviesService.create(movieData);
    }
    remove(movieID) {
        return this.moviesService.deleteOne(movieID);
    }
    path(movieID, updateData) {
        return Object.assign({ updatedMovie: movieID }, updateData);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MoviesApiController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", movie_entity_1.Movie)
], MoviesApiController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
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
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MoviesApiController.prototype, "path", null);
MoviesApiController = __decorate([
    (0, common_1.Controller)('movies-api'),
    __metadata("design:paramtypes", [movies_api_service_1.MoviesApiService])
], MoviesApiController);
exports.MoviesApiController = MoviesApiController;
//# sourceMappingURL=movies-api.controller.js.map