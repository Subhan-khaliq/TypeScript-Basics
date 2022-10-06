async function myFunction() {
  return "Hello";
};

function myDisplayer(value)
    {
        console.log(value);
    }
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);