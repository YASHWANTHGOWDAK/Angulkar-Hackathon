import { Component } from '@angular/core';
import { ItemService } from '../../Services/item.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Item } from '../../Models/Item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  isSelected: boolean = false;

  constructor(private it:ItemService)
{}

items :Item[] =[]
value :number = 1;

ngOnInit():void{

  this.it.fetchitem().subscribe(data =>{
    this.items = (data); 
    
  }
  )
}

select(){
  this.isSelected =true;
}

increment(){
  this.value = this.value + 1;
}

  decrement(){
    if(this.value <=1){
      this.isSelected =false;
    }
    this.value = this.value - 1;
  }

}
