import { Module } from '@nestjs/common';
import { MoviesApiController } from './movies-api/movies-api.controller';
import { MoviesApiService } from './movies-api/movies-api.service';

@Module({
  imports: [],
  controllers: [MoviesApiController],
  providers: [MoviesApiService],
})
export class AppModule {}
