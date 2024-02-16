import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/Orders'

  fetchorder():Observable<Order[]> {

   return this.http.get<Order[]>(this.url)

  }

  getorderById(id:string):Observable<Order>{
    return this.http.get<Order>(`${this.url}/${id}`)
  }

  addOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.url,order)
  }

  deleteOrder(id:string):Observable<Order>{
    return this.http.delete<Order>(`${this.url}/${id}`)
  }

  updateOrder(order:Order[]){
    return this.http.put(this.url,order)
  }

  }

