var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10; 

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//This creates a function named "fight"

var fight = function(enemyName) {
 // fight function statements
}
// Alert players they are starting the round.
    window.alert ("Welcome to Robot Gladiators!");

//Subtract the value of 'playerAttack' from the vlaue of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so that we know that it worked.
console.log(
    playerName + "attacked" + enemyNames + "now has" + enemyHealth + "health remaining."
);
// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
}

else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
}
// Subtract the value of 'enemyAttack from the value of 'playerHealth' and use the result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked.
console.log(
    enemyNames + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining.");
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

fight ();
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// If player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + "attacked" + enemyNames + "." + enemyNames + " now has " + enemyHealth + "health remaining.");
}

// check enemy's health
if (enemyHealth <+ 0) {
    window.alert(enemyNames + " has died!");
}

else {
    window.alert(enemyNames + " still has " + enemyHealth + " health Left."); 
}

// Remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyNames + "attacked" + playerName + "." + playerName + " now has " + playerHealth + " health remaining.");


    // check player's health
     if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
     }

     else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
     }

     //If player chooses to skip
     
     if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
       // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
      }
      // if no (false), ask question again by running fight() again
      else {
        window.alert("You need to choose a valid option. Try again!");
     }
    }

    // Game States

    // "WIN" - Player robot has defeated all enemy robots

    //* Fight all enemey robots

    //* Defeat each enemy robot

    // "LOSE" - Player robot's health is zero or less

  for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }


