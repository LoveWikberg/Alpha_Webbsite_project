var geographyQuestions = [
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
];

var cultureQuestion = [
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
answer: "Picasso",
choice: ["Choose an answer","Leonardo Da Vinci","Pablo Picasso","Silvio Berlusconi","Claudio Marchisio"],
},
{
question: "In which city did Romeo and Julia live?",
answer: "Verona",
choice: ["Choose an answer","Verona","Palermo","Florence","Naples", "Bologna"],
},
];

var sportQuestion = [
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
];

var questionNumber = ["first", "second", "third", "forth", "fifth", "sixth", "seventh", "eight", "ninth", "tenth"];



function dummy(array){
	printAll(array);
	alert(array);
}

function printAll(array){
	var html;
	var category;
	if (array == 1){
		category = 'onclick="calculatePoints' + '(geographyQuestions)"';
		array = geographyQuestions;
	}
	else if(array == 2){
		category = 'onclick="calculatePoints' + '(cultureQuestion)"';
		array = cultureQuestion;
	}	
	else if(array == 3){
		category = 'onclick="calculatePoints' + '(sportQuestion)"';
		array = sportQuestion;
	}

	for(var i=0; i<array.length; i++){
		html += test(array, i);
		html += "<hr>";

	}
	var dummy = array;
	html += '<input type="button" value="submit answers"' + category + '></input>';
	document.getElementById("printTable").innerHTML = html;
}


function calculatePoints(arr){
	
	var points = 0;
	for(var i=0; i < arr.length; i++){
		var value = document.getElementById(questionNumber[i]).value;
		if(value == arr[i].answer)
		{
			points++;
		}
	}
	document.getElementById("printCorrect").innerHTML = "<p> Correct answers: " + points + "</p>";
}

function test(array, index){
	var html = "<p><b>" + array[index].question + "</b></p>";
	
	html += '<select text="hej" id="' + questionNumber[index] + '">';
	for(var x=0; x < array[index].choice.length; x++){
		html += '<option value="' +array[index].choice[x]+ '">' +array[index].choice[x]+ '</option>' 
	}
	html += "</select><br>";
	return html;
}

function randomQuestion(){
	var questionArray = [];
	var test = Math.floor((Math.random() * 4) + 1);
	if (test == 1)
	{questionArray = geographyQuestions.slice()}
}















/*
function testTwo(index){
	var html = "<p><b>" + questions[index].question + "</b></p>";
	html += '<form id="' + questionNumber[index] + '">';
	for(i=0; questions[index].choice.length; i++){
		html += '<input type="radio" value="' +questions[index].choice[i]+ '">' + questions[index].choice[i] +	'</br>';
	}
	html += "</form>"
	return html;
}*/

/*
function testResult(){
	for(var i=0; i < questions.length; i++){
		testAgain(i);
	}
	document.getElementById("printCorrect").innerHTML = "<p>" + correctA + "</p>";
}


function testAgain(index){
	//var radios = []; //= document.getElementsByName(names[index]);
	var radios = +$('input[name="' +names[index]+ '"]:checked').val();
	if(radios == questions[index].answer)
	{
		correctA++;
	}
/*
	for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
		if(radios[i] = questions[i].answer){
			correctA++;
			alert("tja");
			break;
		}
        // do whatever you want with the checked radio
        //alert(radios[i].value);
    }
	}
}*/