import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemResponseModel } from '../models/itemResponseModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  
  login(loginModel:LoginModel){
    let apiUrl = environment.apiUrl +'auth/login';
    return this.httpClient.post<ItemResponseModel<TokenModel>>(apiUrl,loginModel)
  }
  register(registerModel:RegisterModel){
    let apiUrl = environment.apiUrl +'auth/register';
    return this.httpClient.post<ItemResponseModel<TokenModel>>(apiUrl,registerModel)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }
}
