import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../Interfeaces/Prduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  AddProduct(model:Product)
  {
    const BaseUrl = 'https://localhost:5001/api/Product/Save';


    return  this.http.post(BaseUrl, model).pipe
    (

      map((Response:any) =>
      {
        const res = Response;
     console.log(res)
      })

    )

  }
}
