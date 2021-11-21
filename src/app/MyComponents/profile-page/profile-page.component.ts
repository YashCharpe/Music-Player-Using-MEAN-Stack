import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  emailId: string
  username: string
  password: string
  pass: string = ""

  constructor(private backendApi: BackendApiService,public router:Router) { }

  ngOnInit(): void {

    this.backendApi.getAccount().subscribe(data => {
      this.emailId = data[0].emailId
      console.log(this.emailId)


      this.username = data[0].name
      this.emailId = data[0].emailId
      this.password = data[0].password

    })

  }
  changePassword(data:any) {
    console.log(this.password)
    console.log(this.pass)
    
    this.backendApi.updatePassword(this.emailId,this.pass).subscribe(data=>{
      alert("Password Updated!!!")
    })

  }

  deleteAccount(){

    this.backendApi.removeAccount(this.emailId).subscribe(data=>{
      alert("Account Deleted!!");

      this.router.navigate(['/'])

    })

  }

}
