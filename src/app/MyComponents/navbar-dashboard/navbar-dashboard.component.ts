import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent implements OnInit {

  emailId: string

  constructor(private backendApi: BackendApiService, public router: Router) { }

  ngOnInit(): void {
    this.backendApi.getAccount().subscribe(data => {
      this.emailId = data[0].emailId
    })
  }

  logout() {

    this.backendApi.updateFalseStatus(this.emailId, "false").subscribe(data => {
      alert("Logged Out Successfully!!!")
    })


  }

}
