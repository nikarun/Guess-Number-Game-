"use strict";
let score=Number(document.querySelector(".score").textContent);

let highScore=0;
let maxHighScore=0;
let number=Math.trunc(Math.random()*20)+1;
document.querySelector(".check").addEventListener("click",function(){
    const guess=Number(document.querySelector(".guess").value);
    //when there is no input
    if(!guess || guess<0 || guess>20){
        document.querySelector(".message").textContent='🤦‍♂️ wrong input';
    }
    //when you have guessed correct number
    else if(number===guess){
        highScore=score;
        maxHighScore=Math.max(maxHighScore,highScore);
        document.querySelector(".message").textContent='👌 Correct Guess';
        document.querySelector(".score").textContent=score;
        document.querySelector(".highscore").textContent=maxHighScore;
        document.querySelector("body").style.backgroundColor=' #60b347'
        document.querySelector(".number").style.width='30rem'
        document.querySelector(".number").textContent=number
        highScore=score;

    }
    //the number you have guessed is smaller
    else if(number!==guess){
       if(score>1){
        score--;
        document.querySelector(".message").textContent=(number-guess>0?'📉 Too Low':' 📈 Too High');
        document.querySelector(".score").textContent=score;
       }else{
        document.querySelector(".message").textContent='😢 you lost the game';
        document.querySelector(".score").textContent=0;
       }
    }
    //the number you have guessed is greater
    
    
})

document.querySelector(".again").addEventListener("click",function(){
    number=Math.trunc(Math.random()*20)+1;
    maxHighScore=Math.max(maxHighScore,highScore);
    score=20;
    document.querySelector(".message").textContent='Start guessing...';
    document.querySelector(".score").textContent=20;
    document.querySelector(".highscore").textContent=maxHighScore;
    document.querySelector(".number").style.width='15rem'
    document.querySelector("body").style.backgroundColor='#222'
    document.querySelector(".number").textContent='?';
    document.querySelector(".guess").value='';
    

})

