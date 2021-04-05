import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{

    let newPath = environment.apiUrl +  "rentals/getrentaldetailsdto";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  
  }
}
