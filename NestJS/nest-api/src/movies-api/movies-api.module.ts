import { Module } from '@nestjs/common';
import { MoviesApiController } from './movies-api.controller';
import { MoviesApiService } from './movies-api.service';

@Module({
    controllers: [MoviesApiController],
    providers: [MoviesApiService],
})
export class MoviesApiModule {}
