export class Customer {
  constructor(
    public id: number,
    public customerName: string,
    public address: string,
    public credit: number,
    public status: boolean,
    public email: string,
    public phone: string,
    public remarks: string
  ) {}

  toString() {
    return `${this.id}, ${this.customerName}, ${this.address}, ${this.credit}, ${
      this.status
    }, ${this.email}, ${this.phone}, ${this.remarks}`;
  }
}
