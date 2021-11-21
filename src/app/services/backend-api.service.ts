import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http:HttpClient) { }

  createNewAccount(data:any){
    let url = "http://localhost:9000/users"
    return this.http.post(url,data)
  }

  checkEmailAndPassword(emailId:string){
    let url = "http://localhost:9000/users/"+emailId;
    return this.http.get(url)
  }

  getSelectedSong(songId:string){
    let url = "http://localhost:9000/musics/"+songId;
    return this.http.get(url)
  }

  checkSelectedSong(emailId:string,songId:string){
    let url = "http://localhost:9000/users/"+emailId+"/playlist/"+songId;
    return this.http.get(url)
  }

  postSongPlaylist(emailId:string,songId:string,songData:any){
    let url = "http://localhost:9000/users/"+emailId+"/playlist";
    return this.http.post(url,songData)
  }

  deleteSongPlaylist(emailId:string,songId:string){
    let url = "http://localhost:9000/users/"+emailId+"/playlist/"+songId;
    return this.http.delete(url)
  }

  getAccount(){
    let url  = "http://localhost:9000/users/true/true";
    return this.http.get(url)
  }

  updatePassword(emailId:string,password:string){
    let url = "http://localhost:9000/users/"+emailId+"/"+password;
    return this.http.patch(url,password)
  }

  removeAccount(emailId:string){
    let url = "http://localhost:9000/users/"+emailId;
    return this.http.delete(url)
  }

  updateTrueStatus(emailId:string,data:any){
    let url = "http://localhost:9000/users/"+emailId;
    return this.http.patch(url,data)
  }

  updateFalseStatus(emailId:string,data:any){
    let url = "http://localhost:9000/users/"+emailId;
    return this.http.patch(url,data)
  }
}