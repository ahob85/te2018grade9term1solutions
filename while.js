const READLINE = require("readline-sync");

/**** Problem 1 ****
Write a function that prints values from 10 to 0, counting down. Use a while
loop!
*/
function countdown() {
  let count = 10;
  while(count >= 0) {
    console.log(count);
    count--;
  }
}

// Test below
console.log("Testing countDown()");
countdown();

/**** Problem 2 ****
Write a function that asks the user to enter a secret password. Until the user
enters the correct password, the program will keep asking for all eternity!
When they finally do enter the correct password, exit the loop and print a
congratulatory message.
*/
function getPassword() {
  let secretPassword = "codenext";
  let userPassword = "";
  while(userPassword !== secretPassword) {
    userPassword = READLINE.question("Please enter the secret password: ");
    if(userPassword !== secretPassword) {
      console.log("Sorry! That's incorrect.");
    }
  }
  console.log("Congrats! Your password is correct!");
}

// Test below
console.log("Testing getPassword()");
getPassword();

/**** Problem 3 ****
Enhance your function above to only allow the user to try entering the correct
password three times. If they fail three times, the program should kick them
out and tell them they are a robot. Otherwise it should give them the same
congratulatory message above.
*/
function getPasswordEnhanced() {
  let secretPassword = "codenext";
  let userPassword = "";
  let attempts = 3;
  while(userPassword != secretPassword && attempts > 0) {
    userPassword = READLINE.question("Please enter the secret password: ");
    if(userPassword != secretPassword) {
      console.log("Sorry! That's incorrect.");
      attempts--;
    }
  }
  if(attempts > 0) {
    console.log("Congrats! Your password is correct!");
  } else {
    console.log("You're a robot!");
  }
}

// Test below
console.log("Testing getPasswordEnhanced()");
getPasswordEnhanced();

/**** Problem 4 ****
As a final enhancement, make it so when the user enters the wrong password, the
program tells them that they are wrong, along with how many attempts they
have left.
*/
function getPasswordFinal() {
  let secretPassword = "codenext";
  let userPassword = "";
  let attempts = 3;
  while(userPassword != secretPassword && attempts > 0) {
    userPassword = READLINE.question("Please enter the secret password: ");
    if(userPassword != secretPassword) {
      console.log("Sorry! That's incorrect.");
      attempts--;
      console.log("Attempts left: " + attempts);
    }
  }
  if(attempts > 0) {
    console.log("Congrats! Your password is correct!");
  } else {
    console.log("You're a robot!");
  }
}

// Test below
console.log("Testing getPasswordFinal()");
getPasswordFinal() ;
