import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './MyComponents/index-page/index-page.component';
import { RouterModule, Routes } from '@angular/router';

import {LoginPageComponent} from './MyComponents/login-page/login-page.component'

const appRoutes:Routes = [
  {path:'',component:IndexPageComponent},
  {path:'login',component:LoginPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
