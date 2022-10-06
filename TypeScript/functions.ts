function getValue(val: string): string {
  return val;
}

console.log(getValue("Subhan Khaliq"));


function evenOdd(val: number, len?: number): boolean {
  if(val % 2 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(evenOdd(15));
