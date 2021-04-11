import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi-auth',
  templateUrl: './navi-auth.component.html',
  styleUrls: ['./navi-auth.component.css']
})
export class NaviAuthComponent implements OnInit {

  constructor(private authService:AuthService,private localStorageService:LocalStorageService,
    private router:Router) { }

  authStatus:boolean = false;
  fullName:any = "";
  ngOnInit(): void {
    this.isAuth();
    
  }
  isAuth(){
    this.authStatus =  this.authService.isAuthenticated();
    if(this.authStatus){
        this.fullName = (localStorage.getItem("fullName") !== null)? localStorage.getItem("fullName") : " ";
    }
  }
  logout(){
    this.localStorageService.clear();
    this.isAuth();
    this.router.navigate(['/']);
  }

}
