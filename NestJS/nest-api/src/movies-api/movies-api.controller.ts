import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesApiService } from './movies-api.service';

@Controller('movies-api')
export class MoviesApiController {

        constructor(private readonly moviesService: MoviesApiService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get("/:id")    // ID별 movie
    getOne(@Param("id") movieID: number): Movie {
        return this.moviesService.getOne(movieID);
    }
 
    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieID: number) {
        return this.moviesService.deleteOne(movieID);
    }

    @Patch("/:id")
    path(@Param("id") movieID: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieID, updateData);
    }
}
