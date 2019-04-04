// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myHouse() {
  const address = "Cedar St";
  console.log(`We live on ${address}.`);
  //debugger;

  function upstairs() {
    const privateSpace = "rooms";
    console.log(`We live together in a house on ${address}, but we all have our own ${privateSpace}.`);
    //debugger;
    
    function myOffice() {
      const offLimits = "Mom's office";
      console.log(`We live together on ${address} and we have our own ${privateSpace}. The kids know they're not allowed in ${offLimits}.`);
      //debugger;
    }
    myOffice();
  }
  upstairs();
}
myHouse();



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====


  // Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  
};