var questions = [
{
question: "Which Turkish city has the name of a cartoon character? ",
answer: "Batman",
choice: ["Choose an answer", "Batman", "Gu'lachmet", "Ful al Shem", "Demir"],
},
{
question: "What is the largest state of the United States?",
answer: "Alaska",
choice: ["Choose an answer", "California", "Alaska", "Texas", "North Dakota"],
},
{
question: "What is the second largest country in Europe after Russia?",
answer: "France",
choice: ["Choose an answer", "Germany", "France", "Ukrain", "Poland"],
},
{
question: "What is the first book of the Old Testament?",
answer: "Genesis",
choice: ["Choose an answer","The protocanonials","Apocrypha","Judas","Genesis"],
},
{
question: "In which English town did Adolf Hitler study art?",
answer: "Liverpool",
choice: ["Choose an answer","London","Brighton","Manchester","Liverpool","North Hampton"],
},
{
question: "Who did paint the famous painting Guernica?",
answer: "Pablo Picasso",
choice: ["Choose an answer","Leonardo Da Vinci","Pablo Picasso","Silvio Berlusconi","Claudio Marchisio"],
},
{
question: "In which city did Romeo and Julia live?",
answer: "Verona",
choice: ["Choose an answer","Verona","Palermo","Florence","Naples", "Bologna"],
},

{
question: 'In which italian city is Juventus FCs home ground, "Juventus Stadium", located?',
answer: "Turin",
choice: ["Choose an answer","Bologna","Rome","Florence","Turin", "Milano"],
},
{
question: "In 2006, during the football world cup, Zinedine Zidane was sent of for head butting another player. Who was it?",
answer: "Marco Materazzi",
choice: ["Choose an answer","Ronaldo","John Terry","Marco Materazzi","Andrea Pirlo", "Paolo Maldini"],
},
{
question: "How many Grand Slam titles have Roger Federer won?",
answer: "18",
choice: ["Choose an answer","10","12","14","16", "18"],
},
{
question: "Which singer joined Mel Gibson in the movie Mad Max: Beyond The Thunderdome?",
answer: "Tina Turner",
choice: ["Choose an answer","Tina Turner","Cher","Nancy Sinatra","Bonnie Tyler"],
},
{
question: "Vodka, Galliano and orange juice are used to make which classic cocktail?",
answer: "Harvey Wallbanger",
choice: ["Choose an answer","French 75","Screwdriver","Classic Mimosa","Harvey Wallbanger"],
},
{
question: "On TV, who did the character Lurch work for?",
answer: "Addams family",
choice: ["Choose an answer","Burns family","Addams family","The Wahlbergs","The Griffins", "The Cullen clan"],
},
{
question: "What is converted into alcohol during brewing?",
answer: "Sugar",
choice: ["Choose an answer","Nitrogen","Hop","Malt","Salt", "Sugar"],
},
{
question: "Which river forms the eastern section of the border between England and Scotland?",
answer: "Tweed",
choice: ["Choose an answer","Tweed","Thames","Hudson","Blerch"],
},
{
question: "Name the two families in Romeo and Juliet?",
answer: "Montague & Capulet",
choice: ["Choose an answer","Lauren & Capulet","Montague & Capulet","Montague & Lauren","Lauren & Babineaux"],
},
{
question: "For which fruit is the US state of Georgia famous?",
answer: "Peach",
choice: ["Choose an answer","Pineapple","Mango","Peach","Apricot","Orange"],
},
{
question: "In which city was Martin Luther King assassinated in 1968?",
answer: "Memphis, Tennessee",
choice: ["Choose an answer","Portland, Oregon","St.George, Utah","Memphis, Tennessee"],
},
];

var resetQuestions = [];

var beforePlayersSet = [

{
name: "",
points: 0,
},
{
name: "",
points: 0,
},
{
name: "",
points: 0,
},
{
name: "",
points: 0,
},
];
var playersArray = [];
var numberOfPlayers;

var playerTurn = 0;
var questionCounter = 0;
var antal;

function resetAllValues(){
	questions = [];
	for(var i=0; i < resetQuestions.length; i++)
	{
		questions.push(resetQuestions[i]);
	}	
	document.getElementById("printQuestion").innerHTML = "<p></p>";
    playerTurn = 0;
    questionCounter = 0;
}

function playAgain(){
	resetAllValues();
	getNumberOfPlayers();
}

function namesToArray(){
	playersArray = [];
	for(var i=0; i < antal; i++){
	var getName = document.getElementById(i.toString()).value;
	beforePlayersSet[i].name = getName;
	beforePlayersSet[i].points = 0;
	playersArray.push(beforePlayersSet[i]);
	}
	
	document.getElementById('printRange').innerHTML = "<p></p>";
	document.getElementById('printPlayerText').innerHTML = "<p></p>";
	printAll();
}

function playernames(){ 
	antal = document.getElementById("ageInputId").value;
	var html = "<p>Set player names</p>";
	for(var i=0; i < antal; i++){
		html += '<input type="text" placeholder="Player' +(i+1).toString()+' name" id="'+i.toString()+'"><br>';
	}
	html += '<input type="button" value="Start" onclick="namesToArray()">';
	document.getElementById("printPlayerText").innerHTML = html;
}

function getNumberOfPlayers(){
	var html = '<form name="registrationForm">';
	html += "<p>Number of players</p>"
	html += '<input type="range" name="ageInputName" id="ageInputId" value="1" min="1" onchange="playernames()" max="4" oninput="ageOutputId.value = ageInputId.value">';
	html += '<output name="ageOutputName" id="ageOutputId">1</output>';
	html += '</form>';
	html +=
	document.getElementById("printRange").innerHTML = html;

}



function printAll(){
	for(var i=0; i < questions.length; i++)
	{
		resetQuestions.push(questions[i]);
	}
	play();
}

function calculatePoints(index){
	var value = document.getElementById("answer").value;
	if(value == questions[index].answer)
	{
		playersArray[playerTurn].points += 1;
		/*if(playerTurn === 1)
		playerOnePoint += 1;
		else if (playerTurn === 2)
		playerTwoPoint += 1;*/
	}
	if(playerTurn < (playersArray.length-1))
		playerTurn += 1;
	else if (playerTurn === (playersArray.length-1))
		playerTurn = 0;
	
	questions.splice(index,1);
	questionCounter += 1;
	play();
}

function printQuestion(index){
	
	var html = "<p><b>" + questions[index].question + "</b></p>";
	html += '<select text="hej" id="answer">';
	for(var x=0; x < questions[index].choice.length; x++){
		html += '<option value="' +questions[index].choice[x]+ '">' +questions[index].choice[x]+ '</option>' 
	}
	html += "</select><br>";
	return html;
}

function play(){
	var html = "<p>";
	for(var i=0; i < playersArray.length; i++){
		html += playersArray[i].name + ": " + playersArray[i].points + "   ";
	}
	html += "</p>";
	
	if(questionCounter < (playersArray.length*5))
	{	
		html += "<p>" + playersArray[playerTurn].name + ", it's your turn!</p>";
		
		var randomNumber = Math.floor((Math.random() * questions.length) + 1);	
		randomNumber -= 1;		
		html += printQuestion(randomNumber);		
		var category = 'onclick="calculatePoints('+randomNumber+')"';		
		html += '<input type="button" value="Next"' + category + '></input>';
		document.getElementById("printQuestion").innerHTML = html;
	}
	else
	{	
		
		var ppp = [];
		for(var x=0; x < playersArray.length; x++){
			ppp.push(playersArray[x].points);
		}
		var largest = Math.max.apply( Math, ppp );
		
		var gameEnd = "";
		for(var i=0; i < playersArray.length; i++){
			if (playersArray[i].points === largest)
			{	
			gameEnd = "<h3>" +playersArray[i].name+ " wins!!!</h3><br>";
			break;
			}
		}
	
		gameEnd += '<input type="button" value="PLAY AGAIN!" onclick="playAgain()"></input>'
		document.getElementById("printQuestion").innerHTML = gameEnd;
	}
}