let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h3=document.querySelector("h3");
let body=document.querySelector("body");

let btns=["red", "green", "yellow", "purple"];

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game started");
        started=true;

        levelUp();
    }

   
});

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function checkAns(idx){
    // console.log("Current level: ",level);
    // let idx=level-1;
    if(gameSeq[idx]===userSeq[idx]){
       if(gameSeq.length==userSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        console.log("Game over!");
        h3.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start the game`;
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },150)
        reset();
    }
}

function reset(){
    level=0;
    gameSeq=[];
    userSeq=[];
    started=false;
}


function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


