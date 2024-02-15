import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/Items'

  fetchitem(){

   return this.http.get(this.url)

  }
}
