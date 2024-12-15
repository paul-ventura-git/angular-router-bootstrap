import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  category: String
  productId: String

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
