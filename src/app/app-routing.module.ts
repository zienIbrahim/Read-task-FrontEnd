import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { 
  AuthGuardService as AuthGuard 
} from './Service/auth-guard.service';
const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'form', component: ProductFormComponent,canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
