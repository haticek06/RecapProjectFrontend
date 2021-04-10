import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;
  brands: Brand[]
  colors: Color[]
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,

    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.createCarAddForm();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
    this.brands = response.data;
  })
}

getColors(){
  this.colorService.getColors().subscribe(response => {
  this.colors = response.data;
})
}


  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      carName: ["", Validators.required],
      brandId:['',Validators.required],
      colorId:['',Validators.required],
      modelYear:['',[Validators.required,Validators.min(1945)]],
      dailyPrice:['',[Validators.required,Validators.min(0)]],
      description:['',[Validators.required,Validators.minLength(2)]]

    })
  }
  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(carModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı');
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          for (
            let index = 0;
            index < responseError.error.Errors.length;
            index++
          ) {
            this.toastrService.error(
              responseError.error.Errors[index].ErrorMessage,
              'Doğrulama Hatası'
            );
          }
        }
      })
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }


}
