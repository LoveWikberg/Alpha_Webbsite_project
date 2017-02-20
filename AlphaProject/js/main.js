/* Chooses between "responsive" class and "topnav" class depending on the size of the screen */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/* Clock and Date*/
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


document.getElementById('both').innerHTML =
dd +'/'+ mm +'-'+ yyyy + ' | ' + h + ":" + m + ":" + s;
var t = setTimeout(startTime2, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}