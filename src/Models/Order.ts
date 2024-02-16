import { Item } from "./Item"

export interface Order{

    orderNo:number
    contactName:string
    orderDate:string
    items_Ordered:Item[]
    orderTotal:number
    taxTotal:number
    grandTotal:number
    image:string

}