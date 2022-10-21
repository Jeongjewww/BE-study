import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesApiService {
    private movies: Movie[]=[];

    getAll(): Movie[] { // 모든 영화 정보를 받아오기 위해 배열
        return this.movies;
    }

    getOne(id: string): Movie { // 하나의 영화 정보만 받아오므로 배열 아님
        const movie = this.movies.find(movie => movie.id === +id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: string) {
        this.getOne(id)
        this.movies.filter(movie => movie.id !== +id);
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }
}
