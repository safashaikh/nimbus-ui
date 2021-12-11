export class Review {
  review_id: string;
  datetime: string;
  review: string;

  constructor(json: any) {
    let data: any = json['M']
    console.log(data)
    this.review_id = data['review_id']['S'];
    this.datetime = data['datetime']['S'];
    this.review = data['review']['S'];
  }
}

export class Product {
  pid: string;
  pname: string;
  manufacturer: string;
  reviews: any;

  constructor(pid: string, pname: string, manufacturer: string, json: any) {
    this.pid = pid;
    this.pname = pname;
    this.manufacturer = manufacturer;
    this.reviews = json;
  }

}