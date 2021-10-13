import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  currentProduct: Product;
  allProducts: Product[];
  testInp: string;
  showProducts = false;

  constructor(productService: ProductsService) {
    this.currentProduct = productService.getPlayer();
    this.allProducts = productService.getAllProducts();
    this.testInp = "testing";
  }

  ngOnInit(): void {
  }

  onSomethingInput(e: Event) : void {
    console.log("Input = ", (<HTMLInputElement> e.target).value);
    this.testInp = (<HTMLInputElement> e.target).value;
  }

  toggleProducts(): void {
    this.showProducts = !this.showProducts;
  }

}
