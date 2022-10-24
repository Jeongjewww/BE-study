import { Module } from '@nestjs/common';
import { MoviesApiModule } from './movies-api/movies-api.module';

@Module({
  imports: [MoviesApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
