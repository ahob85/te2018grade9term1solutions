// **** Problem 1: R-rated ****
// You cannot see an R-rated movie unless you are at least 18, or you are with
// an adult. Write code that prints whether or not someone can see an
// R-rated movie.
console.log("*** Problem 1: R-rated ***");
let age = 25; // assign a number
let withAdult = true; // assign a boolean
if(age >= 18 || withAdult) {
  console.log("You can watch an R-rated movie.");
} else {
  console.log("You cannot watch an R-rated movie.");
}

// **** Problem 2: Umbrella ****
// You should bring an umbrella when you travel, but only if it is raining.
// However, if it is thunderstorming, you should not bring an umbrella since
// that's bad luck. Note that if it is thunderstorming, it is obviously raining
// as well. Write code that prints if someone should bring an umbrella
// with them.
console.log("*** Problem 2: Umbrella ***");
let raining = true;
let thunderstorming= false;
if(raining && !thunderstorming) {
  console.log("You should bring an umbrella");
} else {
  console.log("You should not bring an umbrella.");
}

// **** Problem 3: Monkey Trouble ****
// There are two monkeys: Bubbles and Spankey. You are in trouble if both of
// them are smiling, or if neither are smiling. Write code that prints if we
// are in trouble.
console.log("*** Problem 3: Monkey Trouble ***");
let bubblesSmiling = false;
let spankeySmiling = false;
if((bubblesSmiling && spankeySmiling) || !(bubblesSmiling || spankeySmiling)) {
  console.log("We are in trouble.");
} else {
  console.log("We are not in trouble.");
}

// **** Problem 4: First Place ****
// Write code that prints the largest of three scores. If there is a tie for
// first place, simply print one of the tie winners.
console.log("*** Problem 4: First Place ***");
let score1 = 5;
let score2 = 6;
let score3 = 7;
let largest = score1;
if(score2 > largest) {
  largest = score2;
}
if(score3 > largest) {
  largest = score3;
}
console.log("Largest score: " + largest);

// **** Problem 5: Phone Shopping ****
// At a phone store, you can afford various "tiers" of phones based on how
// much money you have.
//    If you have at least $30 you can buy a prepaid phone.
//    If you have at least $100 you can buy a bottom-tier phone.
//    If you have at least $300 you can buy a middle-tier phone.
//    If you have at least $600 you can buy a top-tier phone.
// Write code that prints all the phone tiers someone can buy based on how much
// money they have.
console.log("*** Problem 5: Phone Shopping ***");
let money = 700;
if(money >= 30) {
  console.log("You can buy a prepaid phone.");
  if(money >= 100) {
    console.log("You can buy a bottom-tier phone.");
    if(money >= 300) {
      console.log("You can buy a middle-tier phone");
      if(money >= 600) {
        console.log("You can buy a top-tier phone.");
      }
    }
  }
}

// **** Problem 6: Guess My Number ****
// Write code that simulates a simple number guessing game. If "guess" matches
// "myNum" print a congratulations message. If the guess is too low or too high,
// print either of those messages. If the guess is myNum +/- 3, print that
// the guess is "warm"; otherwise print that it is "cold".
console.log("*** Problem 6: Guess My Number ***");
let myNum = 5;
let guess = 2;
if(guess < myNum) {
  console.log("Your guess is too low!");
  if(guess < myNum - 3) {
    console.log("You're cold.");
  } else {
    console.log("You're warm.");
  }
} else if(guess > myNum) {
  console.log("Your guess is too high!");
  if(guess > myNum + 3) {
    console.log("You're cold.");
  } else {
    console.log("You're warm.");
  }
} else {
  console.log("Your guess is correct!");
}
