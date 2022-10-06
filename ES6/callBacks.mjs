function greeting(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = "Subhan Khaliq";
  callback(name);
}

processUserInput(greeting);
