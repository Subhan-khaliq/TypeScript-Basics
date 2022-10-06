//partial
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;

//required
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000
};

//record
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};
