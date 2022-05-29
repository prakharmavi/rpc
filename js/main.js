let playerpnt=0;
let cmprpnt=0;
let i = 1
while (i < 6) {
    console.log('round ' + i)
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    if (computerSelection == playerSelection) {

        console.log(
            'tie because computer chose ' +
            computerSelection +
            ' and you chose ' +
            playerSelection);

    }
    if (computerSelection =='rock'&&playerSelection=='paper') {

        console.log(
            'win because ' +
            playerSelection +
            ' beats ' +
            computerSelection);
            playerpnt++;
            console.log('youscored a point')

    }
    if (computerSelection =='rock'&&playerSelection=='scissor') {

        console.log(
            'loose because ' +
            computerSelection +
            ' defeats ' +
            playerSelection);
            cmprpnt++;
            console.log('BOT scored a point')

    }
    if (computerSelection =='paper'&&playerSelection=='rock') {

        console.log(
            'loose because ' +
            computerSelection +
            ' defeats ' +
            playerSelection);
            cmprpnt++;
            console.log('BOT scored a point')

    }
    if (computerSelection =='paper'&&playerSelection=='scissor') {

        console.log(
            'win because ' +
            playerSelection +
            ' beats ' +
            computerSelection);
            playerpnt++;
            console.log('you scored a point')
    }
    if (computerSelection =='scissor'&&playerSelection=='paper') {

        console.log(
            'loose because ' +
            computerSelection +
            ' defeats ' +
            playerSelection);
            cmprpnt++;
            console.log('BOT scored a point')

    }
    if (computerSelection =='scissor'&&playerSelection=='rock') {

        console.log(
            'win because ' +
            playerSelection +
            ' beats ' +
            computerSelection);
            playerpnt++;
            console.log('youscored a point')

    }
    console.log( "BOT's Score:- "+cmprpnt+"\nYOUR Score"+playerpnt)
    i++;
    if (i==6){
        if(cmprpnt>playerpnt){
            console.log('LOOSER!!\nA human lost to a computer')
        }
        if(cmprpnt<playerpnt){
            console.log('WOHOOO!!\nYou made that bot loose')
        }
    }
    
}
function playerPlay() {
    let usript = prompt('Enter:-\nRock, paper or scissor')
    let playsselection = usript.toLowerCase()

    if (playsselection != 'rock' &&
        playsselection != 'paper' &&
        playsselection != 'scissor') {
        console.log('are you dumb what is this ' + playsselection + '?')
    }
    console.log(playsselection)
    return (playsselection)

}



function computerPlay() {
    let choices = ['rock', 'paper', 'scissor']
    let cmpchosen = choices[Math.floor(Math.random(choices) * 3)]
  
    return cmpchosen;
}




