/*WELCOME MESSAGE*/

const name = "Felix Azriel Elmido";

document.getElementById("welcomeMessage").textContent =
"Welcome, " + name + "!";


/*STUDY COUNTER*/

let count = 0;

const sessionText = document.getElementById("sessionText");
const addBtn = document.getElementById("addSession");
const resetBtn = document.getElementById("resetSession");

addBtn.addEventListener("click", function(){

count++;

sessionText.textContent = "Study sessions today: " + count;

});


resetBtn.addEventListener("click", function(){

count = 0;

sessionText.textContent = "Study sessions today: " + count;

});


/*WEEKLY GOALS ARRAY*/

const goals = [
"Read notes",
"Finish lab",
"Practice JavaScript"
];


/*LOOP PRINT TO CONSOLE*/

for(let i=0;i<goals.length;i++){

console.log(goals[i]);

}


/*SHOWING MY GOALS BUTTON*/

const showGoalsBtn = document.getElementById("showGoals");
const goalList = document.getElementById("goalList");

showGoalsBtn.addEventListener("click", function(){

goalList.innerHTML = "";

for(let i=0;i<goals.length;i++){

const li = document.createElement("li");

li.textContent = goals[i];

goalList.appendChild(li);

}

});


/*MY SIMPLE DECISION*/

const hoursStudied = 3;

if(hoursStudied >= 3){

console.log("Good progress");

}else{

console.log("You should study more");

}