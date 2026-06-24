import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PRODUCTS } from '../../data/products.mock';
import { Product } from '../../models/product';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  products = PRODUCTS;
  product?: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const category = params['category'];
      const id = Number(params['id']);
      this.product = this.products.find(
        p => p.category === category && p.id === id
      );
    });
  }
}


