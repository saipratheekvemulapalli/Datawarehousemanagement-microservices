import { TestBed } from '@angular/core/testing';
import { Category } from './category';
import { CategoryService } from './category.service';

describe('Category', () => {
  let service: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});