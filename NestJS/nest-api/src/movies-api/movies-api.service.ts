import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesApiService {
    private movies: Movie[]=[];

    getAll(): Movie[] { // 모든 영화 정보를 받아오기 위해 배열
        return this.movies;
    }

    getOne(id: string): Movie { // 하나의 영화 정보만 받아오므로 배열 아님
        return this.movies.find(movie => movie.id === +id)  // parseInt(id)라 해도 됨, +id라 해도 string을 number로 바꿔줄 수 있음
    }

    deleteOne(id: string): boolean {
        this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }
}
