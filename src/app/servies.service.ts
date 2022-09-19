import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiesService {
  constructor(public _HttpClient:HttpClient) { }
  userdata():Observable <any>
  {
   return this._HttpClient.get("https://jsonplaceholder.typicode.com/posts")
  }
}
