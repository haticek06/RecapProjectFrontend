import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44374/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcardetails'
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcarsbybrandid?brandId='+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?colorId='+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+ 'cars/getcardetail?carId='+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrandAndColorId(brandId:number, colorId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandandcolorid?brandId="+brandId+"&colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


  add(car:Car):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'cars/add';
    return this.httpClient.post<ResponseModel>(apiUrl,car)
  }
  getCar(id:Number):Observable<ItemResponseModel<Car>>{
    let apiUrl = environment.apiUrl +'cars/getbyid?id='+id;
    return this.httpClient.get<ItemResponseModel<Car>>(apiUrl);
  }
  update(car:Car):Observable<ResponseModel>{
    let newPath = environment.apiUrl +'cars/update';
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
}
