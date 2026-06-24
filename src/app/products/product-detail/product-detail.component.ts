import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  category: string;
  productId: string;

  constructor(private route: ActivatedRoute) {
    this.category = "jewelry";
    this.productId = "12345";
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.productId = params['id'];
    });
  }
}
