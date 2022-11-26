import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BookService } from './book.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let booService: BookService;
 


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call oninit' , () => {
    expect(component.ngOnInit()).toHaveBeenCalled();
  });

  it('should call getAllBooks' , () => {
    expect(booService.getAllBooks()).toHaveBeenCalled();
  });
  it('should call opennav', () => {
    expect(component.openNav()).toHaveBeenCalled();
  });
  it('should call closenav', () => {
    expect(component.closeNav());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
