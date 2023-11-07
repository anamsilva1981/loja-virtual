import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { ProductResponse } from '../interfaces/product-response.interface';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product.interface';

const productResponse = {
  products: [],
  total: 100,
  skip: 0,
  limit: 30
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _http = inject(HttpClient);
  private _productsSubject$ = new BehaviorSubject<ProductResponse>(productResponse);
  private _productsDetails!: Product;

  public readonly productsResponse$: Observable<ProductResponse> = this._productsSubject$.asObservable();


  public getAllProducts(): void {
    this._http.get<ProductResponse>(`${environment.API}/products`).pipe(take(1))
    .subscribe(response => {
      console.log(response, 'return: response')
      this._productsSubject$.next(response);
    });
  }

  // public getProductById(id: number): Observable<Product> {
  //   return this._http.get<Product>(`${environment.API}/products/${id}`);
  // }


  // public getProductByFilter(filter: string): void {
  //   this._http.get<ProductResponse>(`${environment.API}/products/search?q=${filter}`).pipe(take(1))
  //   .subscribe(response => {
  //     this._productsSubject$.next(response);
  //   });
  // }

}
