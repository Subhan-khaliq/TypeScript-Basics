interface Address {
  getAddress: () => string;
}

class Person implements Address {
  public name: string;
  public street: string;
  public house: string;

  public constructor(name: string, street: string, house: string){
    this.name = name;
    this.street = street;
    this.house = house;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.street+" "+ this.house;
  }

};

class Employee extends Person
{

  public getEmployeeName(): string {
    return this.name;
  }

  public override getAddress(): string {
    return this.street;
  }
};

export {Person, Employee};
