import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { BackendApiService } from '../../services/backend-api.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  emailId: string = ""
  password: string = ""

  constructor(private backendApi: BackendApiService) {
      
  }

  ngOnInit(): void {
  }

  loginFunction(data:any) {

    this.backendApi.checkEmailAndPassword(data,this.emailId).subscribe(data=>{
      console.warn(data)
      if(data==null)
      {
        alert("User NOT FOUND")
        console.log("User NOT FOUND")
      }
      else{
        alert("Sucessfully Logged in!")
      }
    })


  }

}
