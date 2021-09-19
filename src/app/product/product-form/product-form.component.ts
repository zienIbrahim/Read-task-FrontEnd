import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Keypears } from 'src/app/Interfeaces/Keypaers.Interface';
import { Product } from 'src/app/Interfeaces/Prduct.interface';
import { Unit } from 'src/app/Interfeaces/Unit.interface';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  selectedOptions: any = [];

  constructor( 
    private fb: FormBuilder,
    private config: NgSelectConfig,private productService:ProductService) {
      
    this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
   }
 IsCarton:boolean=false; 
 IsBox:boolean=false; 
 IsPeas:boolean=false; 


 ProductForm= new FormGroup({});
 BoxUnitForm= new FormGroup({});
 PeasUnitForm= new FormGroup({});
 CartonUnitForm= new FormGroup({});

 options = [
     { id: 1, name: 'كرتونة' },
     { id: 2, name: 'حبة' },
     { id: 3, name: 'علبة' },
 ];

   
  ngOnInit(): void {
    this.intForm();
  }
  intForm(){
    this.ProductForm = this.fb.group({
      productName: [null ,Validators.required],
      isSold: [null,Validators.required],
      categery: [null,Validators.required],
      productionType: [null,Validators.required],
    });

    this.CartonUnitForm = this.fb.group({
      price: [null ,Validators.required],
      quntity: [null,Validators.required],
      barcode: [null,Validators.required],
    });

    this.BoxUnitForm = this.fb.group({
      price: [null ,Validators.required],
      quntity: [null,Validators.required],
      barcode: [null,Validators.required],
    });

    this.PeasUnitForm = this.fb.group({
      price: [null ,Validators.required],
      quntity: [null,Validators.required],
      barcode: [null,Validators.required],
    });
  }

  

  save() {
    let request: Product |undefined;
    let ProductInfo: Product = this.ProductForm.value;
    let BoxUnitFormInfo: Unit = this.BoxUnitForm.value;
    let PeasUnitFormInfo: Unit = this.PeasUnitForm.value;
    let CartonUnitFormInfo: Unit = this.CartonUnitForm.value;
let tempProductArr: Unit[] = [];

 /*  tempProductArr.push(this.BoxUnitForm.value)
  tempProductArr.push(this.PeasUnitForm.value)
  tempProductArr.push(this.CartonUnitForm.value)
    console.log(BoxUnitFormInfo);
    console.log(this.PeasUnitForm.value);
    console.log(this.CartonUnitForm.value);
    console.log(ProductInfo); */
    
    request=ProductInfo;

for(var u in  this.selectedOptions){
 
  if( this.selectedOptions[u].id==1)
  {
    CartonUnitFormInfo.UnitName=this.selectedOptions[u].name;
    tempProductArr.push(this.CartonUnitForm.value)
  }
  if( this.selectedOptions[u].id==2)
  {
    PeasUnitFormInfo.UnitName=this.selectedOptions[u].name;
    tempProductArr.push(this.PeasUnitForm.value)
  }
  if( this.selectedOptions[u].id==3)
  {
    BoxUnitFormInfo.UnitName=this.selectedOptions[u].name;
    tempProductArr.push(this.BoxUnitForm.value)
  }
}
request.unit = tempProductArr;
console.log(request)
this.productService.AddProduct(request).subscribe(res=> console.log(res))
    //ProductInfo.unit.push(BoxUnitFormInfo);

console.log("Product Info:",ProductInfo);
console.log(ProductInfo);
console.log(this.selectedOptions);

  }
  
  DLLcange(e:Keypears) {
    this.selectedOptions = e;
  }

}