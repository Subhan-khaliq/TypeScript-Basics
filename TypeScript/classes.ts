interface Address {
  getAddress: () => string;
}

class Person implements Address {
  public name: string;
  public val: string;
  public street: string;
  public house: string;

  public constructor(name: string, val: string, street: string, house: string){
    this.name = name;
    this.val = val;
    this.street = street;
    this.house = house;
  }

  public getName(): string {
    return this.name;
  }

  public getValue(val: string): string {
    return this.val;
  }

  public getAddress(): string {
    return this.street+" "+ this.house;
  }

}

export {Person};
