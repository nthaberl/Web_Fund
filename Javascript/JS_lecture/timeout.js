function message() {
    console.log("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 3000); 
//first argument is function, second is actual time in milliseconds
console.log("End");

//first start is printed, then timer is runs in background
//end is printed, then function message runs

