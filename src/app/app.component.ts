import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ItemService } from '../Services/item.service';
import { ItemComponent } from '../Components/item/item.component';
import { ViewOrdersComponent } from '../Components/view-orders/view-orders.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ItemComponent,RouterLink,ViewOrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fiery_Restaurant';
}
