import { Link } from "src/app/link";

export class User {
  ID: Number;
  nameLast: string;
  nameFirst: string;
  username: string;
  email: string;
  addressID: Number;

  constructor(ID: Number, nameLast: string, nameFirst: string, username: string, email: string, addressID: Number) {
    this.ID         = ID       
    this.nameLast   = nameLast 
    this.nameFirst  = nameFirst
    this.username   = username 
    this.email      = email    
    this.addressID  = addressID
  }
}

export class Address {
  ID: Number;
  streetNo: string;
  streetName1: string; 
  streetName2: string;
  city: string;
  state: string; 
  zipcode: string;
  countryCode: string;

  constructor(ID: Number,
    streetNo: string,
    streetName1: string, 
    streetName2: string,
    city: string,
    state: string, 
    zipcode: string,
    countryCode: string
    ){
      this.ID = ID
      this.streetNo = streetNo
      this.streetName1 = streetName1
      this.streetName2 = streetName2
      this.city = city
      this.state = state
      this.countryCode = countryCode
      this.zipcode  = zipcode 
  }
}