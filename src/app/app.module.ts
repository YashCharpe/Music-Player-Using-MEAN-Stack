import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './MyComponents/index-page/index-page.component';
import { RouterModule, Routes } from '@angular/router';

import {LoginPageComponent} from './MyComponents/login-page/login-page.component';
import { RegistrationPageComponent } from './MyComponents/registration-page/registration-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { MainDashboardPageComponent } from './MyComponents/main-dashboard-page/main-dashboard-page.component'

const appRoutes:Routes = [
  {path:'',component:IndexPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegistrationPageComponent},
  {path:'dashboard',component:MainDashboardPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    MainDashboardPageComponent
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
