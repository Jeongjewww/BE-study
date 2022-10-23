import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesApiService } from './movies-api.service';
export declare class MoviesApiController {
    private readonly moviesService;
    constructor(moviesService: MoviesApiService);
    getAll(): Movie[];
    getOne(movieID: number): Movie;
    create(movieData: CreateMovieDto): void;
    remove(movieID: number): void;
    path(movieID: number, updateData: UpdateMovieDto): void;
}
