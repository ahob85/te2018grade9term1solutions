// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let changeMachine = {
  quarters: undefined,
  dimes: undefined,
  nickels: undefined,
  pennies: undefined
};

console.log("*****************************************************************");
console.log("bLeep blOop! i'm a CHanGE macHINe!");
changeMachine.pennies = READLINE.question("Please enter cents as a positive integer: ");
console.log(changeMachine.pennies + " cents makes:");
changeMachine.quarters = Math.floor(changeMachine.pennies / 25);
changeMachine.pennies = changeMachine.pennies % 25;
changeMachine.dimes = Math.floor(changeMachine.pennies / 10);
changeMachine.pennies = changeMachine.pennies % 10;
changeMachine.nickels = Math.floor(changeMachine.pennies / 5);
changeMachine.pennies = changeMachine.pennies % 5;
console.log(changeMachine.quarters + " quarters");
console.log(changeMachine.dimes + " dimes");
console.log(changeMachine.nickels + " nickels");
console.log(changeMachine.pennies + " pennies");
console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");
console.log("*****************************************************************");
READLINE.question("Press Enter key to exit.");
