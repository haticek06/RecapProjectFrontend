import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/models/userDto';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  name:UserDto;
  authControl:boolean=false;

  constructor(private authService: AuthService,private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    
  }

}
