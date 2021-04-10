import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm: FormGroup;
  brand:Brand;
  dataLoaded = false;
  constructor( private formBuilder: FormBuilder,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getBrand(params['brandId']);
        this.createBrandUpdateForm();
      }
    });
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }
  getBrand(brandId:Number){
    this.brandService.getBrand(brandId).subscribe(response => {
      this.brand = response.data
      this.dataLoaded = true;
    })
  }
  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({brandId:this.brand.brandId}, this.brandUpdateForm.value);
      console.log(brandModel);
      this.brandService.update(brandModel).subscribe(
        (response) => {
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
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

}
