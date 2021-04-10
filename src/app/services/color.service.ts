import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { environment } from 'src/environments/environment';
import { ItemResponseModel } from '../models/itemResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let apiUrl = environment.apiUrl +'colors/getall';
    return this.httpClient.get<ListResponseModel<Color>>(apiUrl);
  
  }

  add(color:Color):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'colors/add';
    return this.httpClient.post<ResponseModel>(apiUrl,color)
  }

  getColor(colorId:Number):Observable<ItemResponseModel<Color>>{
    let apiUrl = environment.apiUrl +'colors/getbyid?id='+colorId;
    return this.httpClient.get<ItemResponseModel<Color>>(apiUrl);
  }
  update(color:Color):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'colors/update';
    return this.httpClient.post<ResponseModel>(apiUrl,color)
  }
}
