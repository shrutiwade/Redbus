import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateReviewComponent } from './review.component';
import { FormsModule } from '@angular/forms';

describe('RateReviewComponent', () => {
  let component: RateReviewComponent;
  let fixture: ComponentFixture<RateReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateReviewComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit a review and update the list', () => {
    component.rating = 4;
    component.review = 'Good service';
    component.submitReview();

    expect(component.reviews.length).toBe(1);
    expect(component.reviews[0].rating).toBe(4);
    expect(component.reviews[0].text).toBe('Good service');
  });

  it('should calculate average rating correctly', () => {
    component.reviews = [
      { rating: 5, text: 'Excellent!' },
      { rating: 3, text: 'Average service' }
    ];

    component.calculateAverageRating();
    expect(component.averageRating).toBe(4);
  });
});
