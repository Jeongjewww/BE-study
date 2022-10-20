import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies-api')
export class MoviesApiController {
    @Get()
    getAll(): string {
        return 'This will return all movies';
    }

    @Get("/:id")    // ID별 movie
    getOne(@Param("id") movieID: string) {
        return `This will return one movie with the id: ${movieID}`;
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete("/:id")
    remove(@Param("id") movieID: string) {
        return `This will delete a movie with the id: ${movieID}`;
    }

    @Patch("/:id")
    path(@Param("id") movieID: string) {
        return `This will patch a movie with the id: ${movieID}`;
    }


}
