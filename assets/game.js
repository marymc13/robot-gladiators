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
 while (playerHealth > 0 && enemyHealth > 0) {
var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or SKIP to choose.');

//if player picks "skip" confirm and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
   // if yes (true), leave fight
if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
break;
  }
}

//Subtract the value of 'playerAttack' from the vlaue of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so that we know that it worked.
console.log(
    playerName + ' attacked ' + enemyName + ' . ' + enemyName + ' now has ' + enemyHealth + ' health remaining. ')
;
// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');

//award playerMoney for winning
playerMoney = playerMoney + 20;

//leave while () loop since enemy is dead
break; 
}
else  {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
}
// Subtract the value of 'enemyAttack from the value of 'playerHealth' and use the result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + ' attacked ' + playerName + ' . ' + playerName + ' now has ' + playerHealth + ' health remaining. ');
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        //leave while () loop if player is dead
     break;
    }
    else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
}//end of while () loop
 };//end of fight function

// fight each enemy robot by looping and fighting them one at a time

//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for (var i = 0; i < enemyNames.length; i++) {
    //if player is still alive keep fighting
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  //pick new enemy to fight
  var pickedEnemyName = enemyNames[i];
  //reset enemyHealth
  enemyHealth = 50;
//Use debugger to pause script from running and check what's gping on at the moment in the code
//debugger;

//pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
fight(pickedEnemyName); 
//if player is still alive and we're not at the last enemy in the array
if  (i < enemyNames.length - 1) {
    shop();
}
    //ask if player wants to use the store before next round
    if (playerHealth > 0 && i < enemyNames.length - 1) {
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round.");
    //if yes, take them to the store() function
    if (storeConfirm) {
        shop();
    }
  }
 }
//if player isn't alive, stop the game
else {
window.alert('You have lost your robot in battle! Game Over!');
break;
}
}
endGame();
};

//function to end the entire game
var endGame = function(){
    window.alert("The game has now ended. Let's see how you did.");
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    //Ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};
var shop = function() {
var shopOptionPrompt = window.prompt
    ("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice");

//Use switch to carry out action
switch (shopOptionPrompt) {
    case "refill":
        if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
 // increase health and decrease money
 playerHealth = playerHealth + 20;
 playerMoney = playerMoney - 7;
}
else {
    window.alert("You don't have enough money.");
}
break;
case "upgrade":
    if (playerMoney >= 7) {
 window.alert("Upgrading player's attack by 6 for 7 dollars.");

 // increase attack and decrease money
 playerAttack = playerAttack + 6;
 playerMoney = playerMoney - 7;
    }
    else {
        window.alert("You don't have enough money!")
    }
 break;
case "leave":
 window.alert("Leaving the store.");

 // do nothing, so function will end
 break;
default:
 window.alert("You did not pick a valid option. Try again.");

 // call shop() again to force player to pick a valid option
 shop();
 break;
}
}
    
startGame();

