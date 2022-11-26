import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewbookComponent } from './create-newbook.component';

describe('CreateNewbookComponent', () => {
  let component: CreateNewbookComponent;
  let fixture: ComponentFixture<CreateNewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
