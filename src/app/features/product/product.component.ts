import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductResponse } from 'src/app/core/interfaces/product-response.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductsService } from 'src/app/core/services/products.service';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    imports: [FormsModule, NgIf, AsyncPipe, RouterModule, NgFor],
    standalone: true
})
export class ProductComponent implements OnInit {
  private readonly _productsService = inject(ProductsService);
  private _router = inject(Router);

  public readonly productsResponse$: Observable<ProductResponse> = this._productsService.productsResponse$;

  constructor() { }

  public ngOnInit(): void {
    this._productsService.getAllProducts();
  }
}
