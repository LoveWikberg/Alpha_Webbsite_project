/* Chooses between "responsive" class and "topnav" class Väljer mellan "responsive" classen eller vanliga topnav beroende på storleken av skärm */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Clock */
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

/* Date */
function getTodaysDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	
	if(dd<10) {
		dd='0'+dd
	} 
	
	if(mm<10) {
		mm='0'+mm
} 

//today = mm+'/'+dd+'-'+yyyy;
//document.write(today);
document.getElementById('date').innerHTML =
dd+'/'+mm+'-'+yyyy;
}

/* Clock and Date*/
function startTime2() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	
	if(dd<10) {
		dd='0'+dd
	} 
	
	if(mm<10) {
		mm='0'+mm
} 

//today = mm+'/'+dd+'-'+yyyy;
//document.write(today);
document.getElementById('both').innerHTML =
dd +'/'+ mm +'-'+ yyyy + ' | ' + h + ":" + m + ":" + s;
var t = setTimeout(startTime2, 500);
}