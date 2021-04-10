import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { environment } from 'src/environments/environment';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let apiUrl = environment.apiUrl +'brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(apiUrl);
  
  }
  add(brand:Brand):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'brands/add';
    return this.httpClient.post<ResponseModel>(apiUrl,brand)
  }
  update(brand:Brand):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'brands/update';
    return this.httpClient.post<ResponseModel>(apiUrl,brand)
  }
  getBrand(brandId:Number):Observable<ItemResponseModel<Brand>>{
    let apiUrl = environment.apiUrl +'brands/getbyid?id='+brandId;
    return this.httpClient.get<ItemResponseModel<Brand>>(apiUrl);
  }

}
