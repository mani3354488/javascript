function ageInDays() {
    var year = prompt("what is your age?");
    var ageInDayss = (2020 - year)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var Image = document.createElement('img');
    var div = document.getElementById("flex-catgen");
    Image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(Image);
}

function rpsGame(yourChoice){
    var humanChoice, botChoice ;
    humanChoice = yourChoice.id;
    botChoice =  numberToChoice(randToRpsInt());
    result = decideWinner(humanChoice, botChoice);
    message = finalMessage(result);
    finalRpsFront(yourChoice.id,botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, ComputerChoice){
    var rpsDatabase = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper' : {'scissors': 1, 'rock': 0, 'paper': 0.5},
        'scissors' : {'scissors': 0.5, 'rock': 0, 'paper': 1},
    };

    var yourScore = rpsDatabase[yourChoice][ComputerChoice];
    var computerScore = rpsDatabase[ComputerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You Lost!', 'color':'red'};
    } else if (yourScore === 0.5){
        return {'message': 'You Tied!', 'color':'Yellow'};
    } else {
        return {'message': 'You Won!', 'color':'Blue'};
    }
}

function finalRpsFront(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150>"
    messageDiv.innerHTML = "<h1 style=color: " + finalMessage['color'] + "; font-size:60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

