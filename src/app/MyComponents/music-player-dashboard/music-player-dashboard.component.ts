import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from '../../services/backend-api.service'

@Component({
  selector: 'app-music-player-dashboard',
  templateUrl: './music-player-dashboard.component.html',
  styleUrls: ['./music-player-dashboard.component.css']
})
export class MusicPlayerDashboardComponent implements OnInit {

  counter = 0;
  currenttime = 0;
  songDuration = 0;
  secDuration = 0;
  playBtnPath = "../../../assets/play.png";
  thumbnailPath: string;
  songId = ""
  musicName: string
  artistName: string
  emailId: string;
  color: string
  songData:any;
  songObject:any;
  outputObject:JSON;

  audio = new Audio()

  constructor(private route: ActivatedRoute, private backendApi: BackendApiService) {
    this.emailId = history.state.data
    console.log(this.emailId)

    this.songId = this.route.snapshot.params.name
    console.log(this.route.snapshot.params.name)
  }

  ngOnInit(): void {

    this.backendApi.checkSelectedSong(this.emailId, this.songId).subscribe(data => {
      console.log(data)
      if (data == null) {
        this.color = "black"
      }
      else {
        this.color = "red"
      }
    })

    this.backendApi.getSelectedSong(this.songId).subscribe(data => {
      console.warn(data[0].musicPath)
      this.songData = data
      this.audio.src = data[0].musicPath
      this.thumbnailPath = data[0].thumbnailPath
      this.musicName = data[0].musicName
      this.artistName = data[0].artistName
    })

    this.counter = 0;
    this.currenttime = 0;
    this.songDuration = 0;
    this.secDuration = 0;
  }

  playAudio() {

    // console.log(this.audio.currentTime)
    // console.log(Math.floor(this.audio.duration % 3600 / 60))

    this.audio.addEventListener("timeupdate", (currentTime) => {
      // Code to update progress bar goes here
      // console.log(currentTime)
      this.currenttime = Math.round(this.audio.currentTime * 100) / 100
      this.songDuration = Math.floor(this.audio.duration % 3600 / 60)
      this.secDuration = Math.floor(this.secDuration % 3600 % 60);
    });

    this.counter++
    if (this.counter % 2 == 0 && this.counter != 0) {
      this.audio.pause()
      this.playBtnPath = "../../../assets/play.png"
      console.log("even: " + this.counter)
    }
    else {
      this.audio.play()
      console.log("odd: " + this.counter)
      this.playBtnPath = "../../../assets/pause.png"
    }
  }
  backward() {
    this.audio.currentTime = this.audio.currentTime - 5;
  }
  forward() {
    this.audio.currentTime = this.audio.currentTime + 5;
  }

  updatePlaylist() {
    if (this.color == "black") {
      console.log(this.songData[0])
      this.color = "red"

      this.songObject=
      {
        "emailId" : this.emailId,
        "songId" : this.songId
      }

      this.outputObject = <JSON>this.songObject
      

      this.backendApi.postSongPlaylist(this.emailId,this.songId,this.songObject).subscribe(data=>{
        alert("Added to Favourites!")
      })
    }
    else {
      this.color = "black";
      this.backendApi.deleteSongPlaylist(this.emailId,this.songId).subscribe(data=>{
        alert("Removed from Favourites!")
      })
    }
  }
}
