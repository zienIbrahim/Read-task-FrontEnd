import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Keypears } from 'src/app/Interfeaces/Keypaers.Interface';
import { Product } from 'src/app/Interfeaces/Prduct.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  selectedOptions: any = [];

  constructor( private fb: FormBuilder,private config: NgSelectConfig) {

    this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
   }
 IsCarton:boolean=false; 
 IsBox:boolean=false; 
 IsPeas:boolean=false; 
 ProductForm= new FormGroup({

 });

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
  }
  save() {
    let ProductInfo: Product = this.ProductForm.value;

console.log("Product Info:",ProductInfo);


  }
  DLLcange(e:Keypears) {

    this.selectedOptions = e;
/* 
    console.log(" item:",e);
   var t= JSON.stringify(e);
  let items = <Keypears[]>JSON.parse(t);

  items.forEach(item => {
    
       if(item.id==1){
         this.IsCarton=true;
   
       }
     else if(item.id==2)
       {
         this.IsPeas=true;
       }
       else if(item.id==3){
         this.IsBox=true;
      }
     
  });
    
    
console.log(t); */
  }

}