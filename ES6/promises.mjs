let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    if (x==0)
    {
        myResolve("OK");
    }
    else
    {
        myReject("Error");
    }
});

function myDisplayer(value) {
    console.log(value);
};

myPromise.then
(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
        
    
);