import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../../services/backend-api.service'

@Component({
  selector: 'app-main-dashboard-page',
  templateUrl: './main-dashboard-page.component.html',
  styleUrls: ['./main-dashboard-page.component.css']
})
export class MainDashboardPageComponent implements OnInit {

  counter = 0;
  emailId: string
  audio = new Audio()

  constructor(private router: Router, private backendApi: BackendApiService) {
    this.backendApi.getAccount().subscribe(data => {
      this.emailId = data[0].emailId
      console.log(this.emailId)
    })
  }

  ngOnInit(): void {

    this.audio.src = "../../../assets/Music/New-Release-Songs/Ranjha - Shershaah 128 Kbps.mp3"
    this.counter = 0;
    //this.emailId = history.state.data
  }

  playAudio() {

    this.counter++
    if (this.counter % 2 == 0) {
      this.audio.pause()
      console.log("even: " + this.counter)
    }
    else {
      this.audio.play()
      console.log("odd: " + this.counter)
    }

  }
  getSong(name: any) {
    console.log(name)

    this.router.navigate(["/player/" + name], { state: { data: this.emailId } })

  }

}
