alert("There is a Zombie Apocolypse. As you head to class a zombie flys from the bushes in a brain dead rage!!!");

var weapon = prompt("As you search for a weapon all you find is a twig, a knife, and a hand grenade. Which do you choose?");

var randomNumber = Math.round(Math.round(2*1));


alert("You attack the Zombie with your" + " " + weapon);

if (randomNumber === 0){
    alert("The Zombie has taken his bite, you are now dead.");
}
else if (randomNumber === 1){
    alert("You have incompacitated the Zombie with your" + " " + weapon + "You Win!!!");
}  
else if (randomNumber === 2) { 
    alert("The Zombie didnt smell you because you already smell like death...So, You Win!!!!");   
}



