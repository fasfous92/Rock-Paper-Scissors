/* let's consider 
    0: Rock
    1: paper
    2: scissors
*/

function GetComputerchoice(){
    let choice= (Math.floor(Math.random()*3))%3 /* returns a random integer from 0 to 2 */
    let res;
    switch (choice) {
        case 0:
            res="rock";
            break;
        case 1:
            res="paper";
            break;
        case 2:
            res="scissors";
            break;
    }

    return res
}


function playRound(playerSelection, computerSelection){
    switch (playerSelection){
        case "rock":
            switch(computerSelection){
                case "paper":
                    console.log(" you lose! "+computerSelection+" beats "+playerSelection);
                    return false;
                case "scissors":
                    console.log("you win "+playerSelection+" beats "+computerSelection);
                    return true;
                default:
                    console.log("Draw!!");      
            }
            break;

        case "paper":
            switch(computerSelection){
                case "scissors":
                    console.log("you lose! "+computerSelection+" beats "+playerSelection);
                    return false;
                case "rock":
                    console.log("you win "+playerSelection+" beats "+computerSelection);
                    return true;
                default:
                    console.log("Draw!!");      
            }
            break;

        case "scissors":
            switch(computerSelection){
                case "rock":
                    console.log("you lose! "+computerSelection+" beats "+playerSelection);
                    return false;
                case "paper":
                    console.log("you win "+playerSelection+" beats "+computerSelection);
                    return true;
                default:
                    console.log("Draw!!");      
            }
            break;
    }
}

function game(){
    let scplayer=0;
    let sccomputer=0;

    for(let i=1;i<6;i++){
        console.log("Round" +i);
        let player=String(prompt("choose rock, paper, scissors"));
        let computer=GetComputerchoice();
        let res=playRound(player,computer);
        if(res==true){
            scplayer++;
        }else if(res==false){
            sccomputer++;
        }

        console.log("player score "+scplayer);
        console.log("Computer score "+sccomputer);


    }






}