export class CustomerModel {
  constructor(
    public name: string,
    public phone: string,
    public address: string,
    public membership: string,
    public id?: number
  ) {}
}
