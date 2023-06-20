

class Vehicle {
  constructor(public color:string) {}
  public drive(): void {
    console.log('woot woot');
  }
  protected honk():void {
    console.log('honk honk');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log('vroom');
  }
  startDriving(): void {
    this.drive();
    this.honk();
  }
}


const car = new Car('red');
car.startDriving();
