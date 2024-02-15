import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/Orders'

  fetchorder(){

   return this.http.get(this.url)

  }
}
