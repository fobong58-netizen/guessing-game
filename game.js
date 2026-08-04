const containerEl = document.querySelector(`.container`);
const btnPlayEl = document.querySelector(`.btn-again`);
const btnChckEl = document.querySelector(`.btn-again3`);
const hideNumEl = document.querySelector(`.hide-num`);
const msgEl = document.querySelector(`.message`);
const inputNumEl = document.querySelector(`.input-number`);
const highScoreEl = document.querySelector(`.high-score`);
const scoreEl = document.querySelector(`.score`);

const mobileContainerEl = document.querySelector(`.mobile-container`);
const mobileBtnPlayEl = document.querySelector(`.mobile-btn-again`);
const mobileBtnChckEl = document.querySelector(`.mobile-btn-again3`);
const mobileHideNumEl = document.querySelector(`.mobile-hide-num`);
const mobileMsgEl = document.querySelector(`.mobile-message`);
const mobileInputNumEl = document.querySelector(`.mobile-input-number`);
const mobileHighScoreEl = document.querySelector(`.mobile-high-score`);
const mobileScoreEl = document.querySelector(`.mobile-score`);
const contactEl = document.querySelector(`.contact`);

//generate a number 1 to 20

let scretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;


//console.log(scretNum);


//event to check the high num

btnChckEl.addEventListener(`click`,()=>{
 const guess = Number(inputNumEl.value);


 //check empty input
 if(guess){

    //not match hide number 

    if(guess != scretNum){

        if(score > 1){

            score--;
            scoreEl.textContent = score;

            msgEl.textContent = guess > scretNum ? "Too High" : "Too Low";
            scoreEl.textContent = score;

        }else{
            msgEl.textContent = "you are a big foolish loser"
            containerEl.style.backgroundColor = "pink";
            scoreEl.textContent = 0
        }

    }else{//succes
       hideNumEl.textContent = scretNum;
       hideNumEl.style.width = "50%";
       hideNumEl.style.transition = "all 0.5s ease-in";
       containerEl.style.backgroundColor = "purple";
       msgEl.textContent = "Congratulations you have won!!";
    }

 }else{
    msgEl.textContent = "pls choose a number"
 }
});


//display message

const displayMessage = function (message){
    msgEl.textContent = message;
};

//reset the game 

btnPlayEl.addEventListener(`click`,()=>{
    score = 20;
    scretNum = Math.floor(Math.random()*20)+1;
    scoreEl.textContent = score;
    hideNumEl.textContent = "?";
    hideNumEl.style.width = "25%";
    hideNumEl.style.transition = "all 0.5s ease-in";
    inputNumEl.value = ""
    containerEl.style.backgroundColor = "pink";
    displayMessage("try again HeGoat.....")
})

console.log(scretNum);


//mobile starts







mobileBtnChckEl.addEventListener(`click`,()=>{
 const guess = Number(mobileInputNumEl.value);


 //check empty input
 if(guess){

    //not match hide number 

    if(guess != scretNum){

        if(score > 1){

            score--;
            mobileScoreEl.textContent = score;

            mobileMsgEl.textContent = guess > scretNum ? "Too High" : "Too Low";
            mobileScoreEl.textContent = score;

        }else{
            mobileMsgEl.textContent = "you are a big foolish loser"
            mobileContainerEl.style.backgroundColor = "pink";
            mobileScoreEl.textContent = 0
        }

    }else{//succes
       mobileHideNumEl.textContent = scretNum;
       mobileHideNumEl.style.width = "50%";
       mobileHideNumEl.style.transition = "all 0.5s ease-in";
       mobileContainerEl.style.backgroundColor = "purple";
       mobileBtnPlayEl.style.backgroundColor = "yellow";
       contactEl.style.display = "block";
       mobileMsgEl.textContent = "Congratulations you have won!!";
       mobileMsgEl.textContent = "SEND YOUR ACCOUNT NUMBER FOR YOUR PRICE!!";
    }

 }else{
    mobileMsgEl.textContent = "pls choose a number"
 }
});


//display message

const displayMobileMessage = function (message){
    mobileMsgEl.textContent = message;
};

//reset the game 

mobileBtnPlayEl.addEventListener(`click`,()=>{
    score = 20;
    scretNum = Math.floor(Math.random()*20)+1;
    mobileScoreEl.textContent = score;
    mobileHideNumEl.textContent = "?";
    mobileHideNumEl.style.width = "25%";
    mobileHideNumEl.style.transition = "all 0.5s ease-in";
    contactEl.style.display = "none";
    mobileInputNumEl.value = ""
    mobileContainerEl.style.backgroundColor = "pink";
    displayMobileMessage("try again HeGoat.....")
})

console.log(scretNum);
