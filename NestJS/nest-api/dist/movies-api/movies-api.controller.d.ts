export declare class MoviesApiController {
    getAll(): string;
    search(searchingYear: string): string;
    getOne(movieID: string): string;
    create(movieData: string): string;
    remove(movieID: string): string;
    path(movieID: string, updateData: any): any;
}
