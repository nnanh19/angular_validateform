import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  get(id: number):Observable<IProduct>{
    return this.http.get<IProduct>('http://localhost:3000/products/'+id)
  }
  getAll():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  update(data: IProduct):Observable<IProduct>{
    return this.http.put<IProduct>('http://localhost:3000/products/'+data.id, data)
  }
  create(data: IProduct):Observable<IProduct>{
    return this.http.post<IProduct>('http://localhost:3000/products', data)
  }
  remove(id: number):Observable<IProduct>{
    return this.http.delete<IProduct>('http://localhost:3000/products/'+id)
  }
}
