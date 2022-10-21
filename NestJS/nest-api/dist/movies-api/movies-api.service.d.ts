import { Movie } from './entities/movie.entity';
export declare class MoviesApiService {
    private movies;
    getAll(): Movie[];
    getOne(id: string): Movie;
    deleteOne(id: string): void;
    create(movieData: any): void;
}
