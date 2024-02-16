import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/Items'

  fetchitem():Observable<Item[]>{

   return this.http.get<Item[]>(this.url)


  }
}
