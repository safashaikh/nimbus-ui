export class Order {
    pname: string;
    manufacturer: string;
    orderDateTime: string;
    quantity: number;
    price: number;
    nameLast: string;
    nameFirst: string;
    username: string;
    email: string;
    streetNo: number;
    streetName1: string;
    streetName2: string;
    city: string;
    state: string;
    zipcode: number;
    oid: string = '0';
  
    constructor(pname: string, 
        manufacturer: string, 
        orderDateTime: string, 
        quantity: number, 
        price: number,
        nameLast: string,
        nameFirst: string,
        username: string,
        email: string,
        streetNo: number,
        streetName1: string,
        streetName2: string,
        city: string,
        state: string,
        zipcode: number
        ) {
      this.pname = pname;
      this.manufacturer = manufacturer;
      this.orderDateTime = orderDateTime;
      this.quantity = quantity;
      this.price = price;
      this.nameLast = nameLast;
      this.nameFirst = nameFirst;
      this.username = username;
      this.email = email;
      this.streetNo = streetNo;
      this.streetName1 = streetName1;
      this.streetName2 = streetName2;
      this.city = city;
      this.state = state;
      this.zipcode = zipcode;
    }
  
  }