import { Component } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Order } from '../../Models/Order';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {

  
  constructor(private or:OrderService)
{}

orders:Order[]=[]
formHeader="view-orders-info"
contactName=""
orderDate=""
orderitems=""
grandTotal=""


showform = false

ngOnInit():void{

  this.or.fetchorder().subscribe(data =>{
    this.orders = data; 
    // console.log(this.orders[0].contactName)
  }
  )

}

openForm(data:any){
  this.showform=true;
  if(data){
    this.contactName=data.contactName;
    this.orderDate=data.orderDate;
    this.orderitems=data.items_Ordered;
    this.grandTotal=data.grandTotal;
  }
}
closeForm(){
  this.showform=false;
}

}
