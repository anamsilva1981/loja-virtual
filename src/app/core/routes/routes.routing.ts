import { Routes } from '@angular/router';
import { ProductComponent } from '../../features/product/product.component';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  // {
  //   path: 'detail/:id',
  //   component: ProductDetailComponent,
  // },
];

// export const RoutesRoutes = RouterModule.forChild(routes);
