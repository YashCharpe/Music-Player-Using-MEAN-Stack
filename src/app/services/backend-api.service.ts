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

  checkEmailAndPassword(data:any,emailId:string){
    let url = "http://localhost:9000/users/"+emailId;
    return this.http.get(url)
  }

}
