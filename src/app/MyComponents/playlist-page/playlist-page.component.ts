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

  constructor(private backendApi: BackendApiService, public router: Router) {

  }

  items = [{ name: "jean", surname: "kruger" }, { name: "bobby", surname: "marais" }]

  ngOnInit(): void {
    this.backendApi.getAccount().subscribe(data => {
      this.emailId = data[0].emailId

      this.backendApi.getSongPlaylist(this.emailId).subscribe(data => {
        this.songPlaylist = data
        console.log(this.songPlaylist)
        console.log(this.items)
      })

    })

  }
}
