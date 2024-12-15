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
    this.category = "clothing";
    this.productId = "12345";
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const category = params['category'];
      const productId = params['id'];
    });
  }
}
