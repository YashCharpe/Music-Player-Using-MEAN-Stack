import { Component, OnInit, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit {


  emailId: string
  songPlaylist: any;
  songNames: any;

  constructor(private backendApi: BackendApiService, public router: Router) {

  }


  ngOnInit(): void {
    this.backendApi.getAccount().subscribe(data => {
      this.emailId = data[0].emailId

      this.backendApi.getSongPlaylist(this.emailId).subscribe(data => {
        this.songPlaylist = data
        console.log(this.songPlaylist)

        for(let i=0;i<this.songPlaylist.length;i++){
          this.songNames[i] = this.songPlaylist[i].songId
        }

        console.log(this.songNames)

      })

    })

  }
}
