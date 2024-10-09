import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class RateReviewComponent {
  rating: number = 5;
  review: string = '';
  reviews: { rating: number, text: string }[] = [];
  averageRating: number = 0;

  submitReview() {
    if (this.review.trim()) {
      // Add the new review to the list
      this.reviews.push({ rating: this.rating, text: this.review });

      // Update the average rating
      this.calculateAverageRating();

      // Reset the form
      this.rating = 5;
      this.review = '';
    }
  }

  calculateAverageRating() {
    let totalRating = 0;
    this.reviews.forEach(review => {
      totalRating += review.rating;
    });

    this.averageRating = totalRating / this.reviews.length;
  }
}
