export class Product {
    pid: string;
    pname: string;
    manufacturer: string;
  
    constructor(pid: string, pname: string, manufacturer: string) {
      this.pid = pid;
      this.pname = pname;
      this.manufacturer = manufacturer;
    }
  
  }

export class Review {
  review_id: string;
  datetime: string;
  review: string;

  constructor(json: any) {
    let data = json['M']
    this.review_id = data['review_id']['S'];
    this.datetime = data['datetime']['S'];
    this.review = data['review']['S'];
  }
}