import { Routes } from '@angular/router';
import { HomeComponent } from './features/public/pages/home/home.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/public/components/layout/layout.component').then(m => m.LayoutComponent),
    loadChildren: () => import('./features/public/pages/pages.routes').then(m => m.routes),
  },
  { path: 'products', component: ProductsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'products/:category/:id', component: ProductDetailComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '**', component: NotFoundComponent }
];
