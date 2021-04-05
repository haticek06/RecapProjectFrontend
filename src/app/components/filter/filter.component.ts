import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  colors:Color[]= [];
  brands:Brand[]= [];
  brandFilter:number;
  colorFilter:number;
  cars:Car[];

  
  constructor(private brandService:BrandService, private colorService:ColorService,
    private carService:CarService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data
    })
  }
  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data
    })
  }

  // getCarsByBrandAndColorId(brandId: number, colorId: number) {
  //   this.carService.getCarsByBrandAndColorId(brandId, colorId).subscribe((response) => {
  //     this.cars = response.data;
  //   });
  // }

  getCurrentColor(colorId: Number) { 
    if (this.colorFilter == colorId) {
      console.log(colorId)
      return true;
    } else {
      return false;
    }
  }

  getCurrentBrand(brandId: Number) {
    if (this.brandFilter == brandId) {
      console.log(brandId)
      return true;
    } else {
      return false;
    }
  }

}
