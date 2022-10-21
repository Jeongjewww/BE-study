import { Movie } from './entities/movie.entity';
import { MoviesApiService } from './movies-api.service';
export declare class MoviesApiController {
    private readonly moviesService;
    constructor(moviesService: MoviesApiService);
    getAll(): Movie[];
    getOne(movieID: string): Movie;
    create(movieData: string): void;
    remove(movieID: string): void;
    path(movieID: string, updateData: any): void;
}
