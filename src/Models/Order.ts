export class Order{

    orderNo:number
    contactName:string
    orderDate:string
    items_Ordered:string
    orderTotal:number
    taxTotal:number
    grandTotal:number


    constructor(orderNo:number, contactName:string, orderDate:string, items_Ordered:string, orderTotal:number,taxTotal:number, grandTotal:number){
        this.orderNo = orderNo;
        this.contactName = contactName;
        this.orderDate = orderDate;
        this.items_Ordered = items_Ordered;
        this.orderTotal = orderTotal;
        this.taxTotal = taxTotal;
        this.grandTotal = grandTotal;
    }

}