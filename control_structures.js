
// Making conditional statements 
// if
// else if 
// else 

let age = 25;

if (age >= 21){
  console.log("Welcome to the party!")
}

const time = 10; 

if(time<12){
  console.log("Good morning");
}
else if (time<18){
  console.log("Good afternoon");
}
else{
  console.log("Good evening");
}

// Nested if statements 
let isRaining = true;
let umbrellaAvailable = false;

// isRaining == true 
if (isRaining) { 
    if (umbrellaAvailable) {
        console.log("Don't forget your umbrella!");
    } else {
        console.log("It's raining, but you don't have an umbrella.");
    }
} else {
    console.log("No need for an umbrella today!");
}

if (isRaining || !umbrellaAvailable){
  console.log("You probably want to grab your umbrella")
}

// Loops (range) (3 stages)
// initialization, condition, iteration (changin value)
for (let i = 0; i < 5; i++){
  console.log("Iteration", i);
}

// Loops (while) - while a condition is true it will keep running
console.log("Starting while loop")

let count = 0;

while (count < 5){
  console.log(count);
  count++; // dont forget to increment the loop or it will just continue running
}


// Loops (do-while) - it will always run at least once, then check the condition
console.log("Starting do while loop")
let num = 0;

do {
  console.log(num);
  num++;
} while (num < 5);

// Loops (for-in) - iterates over enumerable properties of an object
console.log("Starting for-in loop")

const fruits = ["apples", "cherry", "banana"]

for (let fruit of fruits){
  console.log("Fruit", fruit);
} 

// Loops (for-of) - iterates over iterable objects (arrays, strings, etc.)
console.log("Starting for-of loop")

const desserts = ["ice cream", "cake", "chocolate"]

for (const d of desserts){
  console.log("Dessert", d);
}


