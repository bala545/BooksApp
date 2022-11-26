import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('getAllBooks should called', () => {
    expect(service.getAllBooks()).toHaveBeenCalled();
  });
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
