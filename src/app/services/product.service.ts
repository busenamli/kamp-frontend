import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:52252/api/";

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    //Gelen data ProductResponseModel'e map edilecek
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    //Gelen data ProductResponseModel'e map edilecek
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}