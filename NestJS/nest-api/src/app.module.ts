import { Module } from '@nestjs/common';
import { MoviesApiController } from './movies-api/movies-api.controller';

@Module({
  imports: [],
  controllers: [MoviesApiController],
  providers: [],
})
export class AppModule {}
