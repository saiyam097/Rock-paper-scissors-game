let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg")
const userComp= document.querySelector(".userComp");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options= ["rock", "paper", "scissors"];
   const randomChoice= Math.floor(Math.random()*3);
   return options[randomChoice];
}

const drawGame=(userChoice,compChoice)=>{
    msg.innerText= "Game is draw";
    msg.style.backgroundColor= "#294C60";
    userComp.innerText= ` User: ${userChoice} \n Comp: ${compChoice}`

}

const showWinner= (userWin, userChoice, compChoice)=>{
       if(userWin){ 
         userScore++;
         userScorePara.innerText=userScore;
          msg.innerText= `You won, Your ${userChoice} beats ${compChoice}`;
          userComp.innerText= ` User: ${userChoice} \n Comp: ${compChoice}`
          msg.style.backgroundColor="green"
       }
       else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `You lost, ${compChoice} beats your ${userChoice}`;
          userComp.innerText= ` User: ${userChoice} \n Comp: ${compChoice}`
        msg.style.backgroundColor="red"
       }
}

const playGame= (userChoice)=>{
       console.log("user choice = " , userChoice);
       const compChoice= genCompChoice();
       console.log("comp choice =", compChoice);

       if(userChoice==compChoice){
         drawGame(userChoice,compChoice);//draw
       } else{
        let userWin=true;
        if(userChoice=="rock"){
            //rock,paper
            userWin= compChoice ==="paper" ? false : true;
        }
        else if(userChoice=="paper"){
           userWin= compChoice==="scissors"? false:true;
        }
        else{
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
       }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});
