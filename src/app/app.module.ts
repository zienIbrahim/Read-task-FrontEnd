import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IconsModule } from './icons.module';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { AuthService } from './Service/auth.service';
import { AuthGuardService } from './Service/auth-guard.service';


const JWT_Module_Options: JwtModuleOptions = {
  config: {
     
  }
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      IconsModule,
      NgbModule,
      ReactiveFormsModule,
  CommonModule,
      NgSelectModule,
      NgMultiSelectDropDownModule.forRoot(),
      HttpClientModule,
    JwtModule.forRoot(JWT_Module_Options),

  ],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
