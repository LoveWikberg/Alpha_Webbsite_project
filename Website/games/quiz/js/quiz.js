var questions = [
{
question: "En storslagen resa",
answer: 0,
choice: ["alex", "pascal"],
},
{
question: "Leifsliv",
answer: 1,
choice: ["balle", "fitta"],
},
{
question: "Bosses bilar",
answer: 0,
choice: ["rov", "hej"],
}];

function printQs() {
	alert("sa");
	var html = "<table>";
	for (var i = 0; i < questions.length; i++){
	html+= "<tr>";
		html+= "Question: " +questions[i].question + "<br>";

			for (var o = 0; o < questions[i].choice.length; o++){

				html+="Choices: " +questions[i].choice[o] + "<br>";
				html+="</tr>";
				html+="</table>";	
			}
	}
	
				document.getElementById("printTable").innerHTML = html;
}

function printAll(){
	var html;
	for(var i=0; i<questions.length; i++){
		html += test(i);
		html += "<hr>";

	}
	document.getElementById("printTable").innerHTML = html;
}


function test(index){
	
	var html = "<p>" + questions[index].question + "</p>" + "<br>";
	html += "<form>";
	for(var i=0; i < questions[index].choice.length; i++){
		html += '<input type="radio" value=i>';
		html += questions[index].choice[i];
		html += "<br>";
	}
	html += "</form>";
	return html;
	//document.getElementById("printTable").innerHTML = html;
}