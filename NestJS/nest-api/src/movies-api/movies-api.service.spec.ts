import { NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { DESTRUCTION } from 'dns';
import e from 'express';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import { NotFoundError } from 'rxjs';
import { MoviesApiService } from './movies-api.service';

describe('MoviesApiService', () => {
  let service: MoviesApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesApiService],
    }).compile();

    service = module.get<MoviesApiService>(MoviesApiService);
    service.create({
      title: "Test Movie",
      genres: ["test"],
      year: 2000
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("getAll", () => {
    it("should return an array", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  })

  describe("getOne", () => {
    it("should return a movie", () => {
      service.create({
        title: "Test Movie",
        genres: ["test"],
        year: 2000
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      // expect(movie.id).toEqual(1);
    });
    it("should throw 404 error", () => {
      try{
        service.getOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });

  describe('deleteOne', () => { 
    it("delete a movie", () => {
      service.create({
        title: "Test Movie",
        genres: ["test"],
        year: 2000
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1)
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });

    it("should return a 404", () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })
  });

  describe('create', () => {
    it("should create a movie", () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: "Test Movie",
        genres: ["test"],
        year: 2000
      });
      const afterCreate = service.getAll().length;
      console.log(beforeCreate, afterCreate);
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    it("should update a movie", () => {
      service.create({
        title: "Test Movie",
        genres: ["test"],
        year: 2000
      });
      service.update(1, {title: "Updated Test"}); // id=1인 영화 title update
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Updated Test');
    });
    it("should throw a NotFoundException", () => {
      try {
        service.update(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
