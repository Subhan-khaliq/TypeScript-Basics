const names: readonly string[] = ["Dylan"];

console.log(names);


const numbers = [1, 2, 3]
numbers.push(4);
console.log(numbers);

//tuples

let ourTuple: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple = [5, false, 'Coding God was mistaken'];
ourTuple.push(6);
console.log(ourTuple);


//named tuples
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);
