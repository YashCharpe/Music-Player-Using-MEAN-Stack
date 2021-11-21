import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { BackendApiService } from '../../services/backend-api.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  emailId: string = ""
  password: string = ""

  constructor(private backendApi: BackendApiService, public router: Router) {

  }

  ngOnInit(): void {
  }

  loginFunction(data: any) {

    this.backendApi.checkEmailAndPassword(this.emailId).subscribe(data => {
      console.warn(data)
      if (data == null) {
        alert("User NOT FOUND")
        console.log("User NOT FOUND")
      }
      else {

        alert("Sucessfully Logged in!")
        
        this.router.navigate(['/dashboard'], { state: { data: this.emailId } })
      }
    })
  }
}
