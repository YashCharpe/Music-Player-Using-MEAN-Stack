import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './MyComponents/index-page/index-page.component';
import { RouterModule, Routes } from '@angular/router';

import {LoginPageComponent} from './MyComponents/login-page/login-page.component';
import { RegistrationPageComponent } from './MyComponents/registration-page/registration-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient,HttpClientModule} from '@angular/common/http'

const appRoutes:Routes = [
  {path:'',component:IndexPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegistrationPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
