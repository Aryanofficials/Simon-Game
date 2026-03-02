let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red","purple", "green"];// Here we store the value of button of all colors. Here its indexing begins form 0 and go upto 3 so we hav to choose the random index. 
let started = false;// here its value is false because game is not started yet.
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){//this condition because if the game is in off mode and user press key the it increase the level by 1 and also set started = true 
    console.log("Game started");//if we don't use this if condition here then every time user click any key game start from starting.
    started = true;
    }

    levelUp();
})

function btnFlash(btn){//this randomely flash any button.
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 }, 200);
}

 function userFlash(btn){// This function is to flash the button by showing white color for 220 millisec.
 btn.classList.add("userFlash");// This only flash button when user click on button.
 setTimeout(function(){
    btn.classList.remove("userFlash");
 }, 220);
}

function levelUp(){
  userSeq = [];// here we reset usersequence to empty value because as teh level up user have to press all while sequence from starting.
  level++;
  h2.innerText = `Level ${level}`;//here we replace the value of level in place of h2.

  let randIdx = Math.floor(Math.random() * 3);// Here we choosing ramdom index between 0 and 3.
  let randColor = btns[randIdx];// Now, srom this random index we choosing ramdom color.
  let randBtn = document.querySelector(`.${randColor}`);//Now, we accecing the button on the bases of that color class.

  gameSeq.push(randColor);//as a ramdom color generated we push it into gameSeq to track the record.
  console.log(gameSeq);
  btnFlash(randBtn);//here we flashing that random button.
}

function checkAns(idx){

if(userSeq[idx] === gameSeq[idx]){//here it conpair user sequence with game secquence
    if(userSeq.length == gameSeq.length){//if we are at last value teh we have to level up. & if we are at middle then we have to continue pressing button.
        setTimeout(levelUp,1000);
    }
}else{
    h2.innerHTML = `Game over, Youe score was ${level} <br> Press any key to start`
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
    document.querySelector("body").style.backgroundColor="white";    
    },150);
    reset();// if user press wrong button which is not matching with gameSeq.
}
}

function btnPress(){//do functionality when a button is pressed
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");//get the value inside id
    userSeq.push(userColor);// here we push the user color inside the user sequence to track user click record.

    checkAns(userSeq.length-1);//because here we checking the last index that just user press inside a sequence.
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){// add event listener on all the buttons.
    btn.addEventListener("click", btnPress)
}


function reset(){// to reset teh function and start from scratch.
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;

}