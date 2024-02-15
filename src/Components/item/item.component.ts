import { Component } from '@angular/core';
import { ItemService } from '../../Services/item.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  constructor(private it:ItemService)
{}

items:any;

ngOnInit():void{

  this.it.fetchitem().subscribe(data =>{
    this.items = data; 
    
  }
  )
}

  

}
