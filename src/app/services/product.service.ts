import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/common.interfaces';

const APIURL= 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${APIURL}productos`);
  }

  getProduct(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${APIURL}producto/${id}`);
  }

  createProduct(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${APIURL}producto`, producto);
  }

  updateProduct(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${APIURL}producto/${id}`, producto);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${APIURL}producto/${id}`);
  }
}
