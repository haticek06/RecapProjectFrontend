import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  brands:Brand[] = [];
  dataLoaded=false;
  imageBasePath = environment.baseUrl
  carFilter="";
  
  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute,
    private brandService:BrandService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params['brandId'] && params['colorId']) {
        this.getCarByFilter(params['brandId'], params['colorId']);
      }
      else if(params["brandId"])
      {
        this.getCarsByBrand(params["brandId"])
      }
      else if (params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()      
      }
      })
  }
  getCarByFilter(brandId:number, colorId: number) {
    this.carService.getCarsByBrandAndColorId(brandId,colorId).subscribe(response => {
      this.cars = response.data,
      this.dataLoaded = true
      if(this.cars.length == 0){
        this.toastrService.info('Bu Özelliklere Sahip Araç Bulunamamıştır', 'Uyarı!');
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded=true;
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=> {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

}
