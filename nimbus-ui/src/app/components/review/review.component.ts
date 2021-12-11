import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../product/product';
import { ProductsService } from '../product/products.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  pid: string = '0';
  productService: ProductsService;
  review: Review;
  review_txt: string ='';

  constructor(productService: ProductsService, private route: ActivatedRoute) {
    this.productService = productService;
    this.review = new Review({"M": {'review_id': {'S': ''}, 'datetime': {'S': ''}, 'review': {'S': ''}}});

   }

  ngOnInit(): void {
    this.pid = this.route.snapshot.params['pid']
    console.log(this.pid)
  }

  onReviewChange(event: any) : void {
    this.review_txt = event.target.value;
    console.log(this.review_txt)
  }

  onSend(event: any) : void {

  }

}
