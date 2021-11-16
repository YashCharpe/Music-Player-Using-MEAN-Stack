import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { BackendApiService } from '../../services/backend-api.service'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  emailId:string = ""
  name:string = ""
  password:string = ""
  mobile:string = ""

  constructor(private backendApi:BackendApiService) { }

  ngOnInit(): void {
  }

  createAccount(data:any){
    if (this.name == "") {
      alert("Enter Name");
    }
    else if (this.emailId == "") {
      alert("Enter Email ID");
    }
    else if (this.password == "") {
      alert("Enter Password")
    }
    else{
      this.backendApi.createNewAccount(data).subscribe(data=>{
        console.warn(data)
      })
      alert(this.name+"Account Created Successfully!")
    }
  }
}
