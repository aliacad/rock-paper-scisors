
const title = document.querySelector('.title');
const userButtons = document.querySelector('.user-buttons');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('scissors');



let choice1 = prompt (' pick one: rock, paper, scissors!');

let userScore = 0;
let computerScore = 0;


let choice2 =  Math.floor(Math.random()*3);
if ( choice2 === 1) {
    return choice2 = 'rock';
} else if ( choice2 === 2){
    return choice2 = 'scissors';
} else choice2 = 'paper';

let game = (choice1, choice2) => {
    if (choice1 === choice2) {
        return 'tie';
    }

    if (choice1 === 'paper' && choice2 ==='rock') {
        return 'Paper defeats rock. yay!';
    } else if ( choice2 === 'scissors' ) {
        return 'scissors wins.';
    }

     if ( choice1 === 'rock' && choice2 ==='scissors'){
        return ' Rock defeats scissors. woo!';
    } else if (choice2 === 'paper') {
        return 'paper wins';
    }
     if ( choice1 === 'scissors' && choice2 === 'paper') {
        return 'Scissors defeats paper. ooooo.';
     } else if (choice2 === 'rock') {
        return 'rock wins';
     }
    };

    let checkWinner = () => {

        if (userScore === 5){
            return 'User Wins';
        }else if (computerScore === 5) {
            return 'Computer Wins';
        } else {
            return 'tie';
        }

    }

    

    game();
    console.log(game());

    var dt = new Date();
    document.getElementById('date-time').innerHTML=dt;

    // choice1 = user
    //choice2 = computer