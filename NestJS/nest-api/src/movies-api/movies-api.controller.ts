import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesApiService } from './movies-api.service';

@Controller('movies-api')
export class MoviesApiController {

        constructor(private readonly moviesService: MoviesApiService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    // @Get("search")
    // search(@Query("year") searchingYear: string) {
    //     return `We are searching for a movie made after: ${searchingYear}`;
    // }

    @Get("/:id")    // ID별 movie
    getOne(@Param("id") movieID: string): Movie {
        return this.moviesService.getOne(movieID);
    }

    @Post()
    create(@Body() movieData: string) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieID: string) {
        return this.moviesService.deleteOne(movieID);
    }

    @Patch("/:id")
    path(@Param("id") movieID: string, @Body() updateData) {
        return {
            updatedMovie: movieID,
            ...updateData,
        }
    }
}
