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
  imgSrc: string
  songName:string

  songCounter = 0;

  newReleaseSongs: any;

  constructor(private router: Router, private backendApi: BackendApiService) {

    this.emailId = history.state.data
    console.log(this.emailId)
    this.backendApi.getAccount().subscribe(data => {
      this.emailId = data[0].emailId
      console.log(this.emailId)
    })

    this.songCounter =0;
  }

  ngOnInit(): void {


    this.backendApi.updateTrueStatus(this.emailId, "true").subscribe(data => {
      console.log("true")
    })

    this.newReleaseSongs = [
      {
        "musicId": "RanjhaSong",
        "musicName": "Raanjha- Shershaah",
        "musicPath": "../../../assets/Music/New-Release-Songs/Ranjha - Shershaah 128 Kbps.mp3",
        "thumbnailPath": "../../../assets/Music/New-Release-Thumbnails/ranjha.png",
        "artistName": "Jasleen Royal, B Praak"
      },
      {
        "musicId": "KusuKusuSong",
        "musicName": "Kusu Kusu - Satyameva Jayate",
        "musicPath": "../../../assets/Music/New-Release-Songs/Kusu Kusu - Satyameva Jayate 2 128 Kbps.mp3",
        "thumbnailPath": "../../../assets/Music/New-Release-Thumbnails/kusu-kusu.png",
        "artistName": "Dev Negi, Zahrah S Khan"
      },
      {
        "musicId": "JugnuSong",
        "musicName": "Jugnu - Badshah",
        "musicPath": "../../../assets/Music/New-Release-Songs/Jugnu - Badshah.mp3",
        "thumbnailPath": "../../../assets/Music/New-Release-Thumbnails/jugnu.png",
        "artistName": "Badshah"
      },
      {
        "musicId": "MeriZindagiSong",
        "musicName": "Meri Zindagi Hai Tu",
        "musicPath": "../../../assets/Music/New-Release-Songs/Meri Zindagi Hai Tu - Satyameva Jayate 2.mp3",
        "thumbnailPath": "../../../assets/Music/New-Release-Thumbnails/meri-zindagi.png",
        "artistName": "Jubin Nautiyal, Neeti Mohan"
      },
      {
        "musicId": "TipTipSong",
        "musicName": "Tip Tip - Sooryavanshi",
        "musicPath": "../../../assets/Music/New-Release-Songs/Tip Tip - Sooryavanshi 128 Kbps.mp3",
        "thumbnailPath": "../../../assets/Music/New-Release-Thumbnails/tip-tip.png",
        "artistName": "Udit Narayan & Alka Yagnik"
      }
    ]
    this.songCounter =0;
    this.audio.src = this.newReleaseSongs[this.songCounter].musicPath
    this.imgSrc = this.newReleaseSongs[this.songCounter].thumbnailPath
    this.songName = this.newReleaseSongs[this.songCounter].musicName
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

  forwardPlay() {
    this.songCounter++;

    if(this.songCounter==5){
      this.songCounter=0;
    }

    
    this.audio.src = this.newReleaseSongs[this.songCounter].musicPath
    this.imgSrc = this.newReleaseSongs[this.songCounter].thumbnailPath
    this.songName = this.newReleaseSongs[this.songCounter].musicName

  }

  backwardPlay() {
    this.songCounter--;

    if(this.songCounter==-1){
      this.songCounter=4;
    }

    
    this.audio.src = this.newReleaseSongs[this.songCounter].musicPath
    this.imgSrc = this.newReleaseSongs[this.songCounter].thumbnailPath
    this.songName = this.newReleaseSongs[this.songCounter].musicName

  }


}
