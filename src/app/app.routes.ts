import { Routes } from '@angular/router';
import { ItemComponent } from '../Components/item/item.component';
import { HomeComponent } from '../Components/home/home.component';
import { ViewOrdersComponent } from '../Components/view-orders/view-orders.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'item', component: ItemComponent},
{path:'order', component: ViewOrdersComponent}

];
