// Sends request to update the animation
(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
//Variables for the playfield and the player
    ctx = canvas.getContext("2d"),
    width = 800,
    height = 600,
    player = {
        x: width / 2,
        y: height - 15,
        width: 15,
        height:15,
        speed: 8,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
	//Controls the gravity and friction, also an array for keypresses
    keys = [],
    friction = 0.9,
    gravity = 1.4;

   //The boxes build up the gamelevel
	
var boxes = [];
//Border left
boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});
//Border bottom
boxes.push({
    x: 0,
    y: height - 10,
    width: width,
    height: 50
});
//Border right
boxes.push({
    x: width - 10,
    y: 50,
    width: 10,
    height: 550
});
//Border top
boxes.push({
    x: width - 800,
    y: 0,
    width: 800,
    height: 10
});
//box level 1
boxes.push({
	
    x: 250,
    y: 440,
    width: 80,
    height: 10
});
//box level 2
boxes.push({
    x: 150,
    y: 520,
    width: 80,
    height: 10
});
//box level 3
boxes.push({
    x: 60,
    y: 400,
    width: 40,
    height: 10
});
//box level 4
boxes.push({
    x: 180,
    y: 320,
    width: 40,
    height: 10
});
//box level 5
boxes.push({
    x: 0,
    y: 300,
    width: 40,
    height: 10
});
//box level 6
boxes.push({
    x: 0,
    y: 230,
    width: 40,
    height: 10
});
//box level 7
boxes.push({
    x: 150,
    y: 200,
    width: 100,
    height: 10
});
//box level 8
boxes.push({
    x: 150,
    y: 200,
    width: 100,
    height: 10
});
//box level 9
boxes.push({
    x: 0,
    y: 150,
    width: 50,
    height: 10
});
//box level 10
boxes.push({
    x: 150,
    y: 100,
    width: 25,
    height: 10
});
//box level 11
boxes.push({
    x: 250,
    y: 100,
    width: 25,
    height: 10
});
//box level 12
boxes.push({
    x: 350,
    y: 100,
    width: 25,
    height: 10
});
//box level 13
boxes.push({
    x: 150,
    y: 200,
    width: 100,
    height: 10
});
//box level 14
boxes.push({
    x: 600,
    y: 500,
    width: 100,
    height: 10
});
//box level 15
boxes.push({
    x: 750,
    y: 550,
    width: 50,
    height: 10
});
//box level 16
boxes.push({
    x: 750,
    y: 450,
    width: 50,
    height: 10
});
//box level 17
boxes.push({
    x: 650,
    y: 380,
    width: 50,
    height: 10
});
//box level 18
boxes.push({
    x: 500,
    y: 320,
    width: 50,
    height: 10
});
//box level 19
boxes.push({
    x: 650,
    y: 260,
    width: 50,
    height: 10
});
//box level 20
boxes.push({
    x: 662,
    y: 180,
    width: 25,
    height: 10
});
//box level 21
boxes.push({
    x: 500,
    y: 160,
    width: 50,
    height: 10
});
//box level 22
boxes.push({
    x: 650,
    y: 260,
    width: 50,
    height: 10
});
//box level 23
boxes.push({
    x: 550,
    y: 80,
    width: 20,
    height: 10
});
//box level 24
boxes.push({
    x: 650,
    y: 90,
    width: 100,
    height: 10
});
//box level 25
boxes.push({
    x: 650,
    y: 260,
    width: 50,
    height: 10
});
//Wall 1
boxes.push({
    x: 450,
    y: 100,
    width: 10,
    height: 500
});
//Wall 2
boxes.push({
    x: 500,
    y: 0,
    width: 10,
    height: 500
});

canvas.width = width;
canvas.height = height;

// Controlls the player speed and jump controll based on what key is pressed

function update() {
	
	//Jump with either upp arrow or spacebar
    if (keys[38] || keys[32]) {
        
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2;
        }
    }
	//Right arrow key press
    if (keys[39]) {
       
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
	//Left arrow key press
    if (keys[37]) {
        
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    player.velX *= friction;
    player.velY += gravity;

	//Fills the boxes from the array with color
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "green";
    ctx.beginPath();
    
	//Enables the player to only jump when he is touching an object (collission)
	
    player.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        
        var dir = colCheck(player, boxes[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= 0;
        }

    }
    
    if(player.grounded){
         player.velY = 0;
    }
    //Displays the player and animates it
    player.x += player.velX;
    player.y += player.velY;

    ctx.fill();
	ctx.fillStyle = "black";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(update);
	//Checks to see if the player has finished the level by checking if he is outside the playingfield
	//I left a "hole" at the end of the level to leave the canvas playingfield
	
	if (player.x > canvas.width){
		alert("You win!"); 
		document.location.reload();
	}
		
}

//This is the collision check method that uses the math object

function colCheck(shapeA, shapeB) {
    
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}
// Checks if the keys are being pressed or not

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
    update();
	
	//Use jquery to play a sound on jump
});
jQuery(document).ready(function ($) {
$(document).keydown(function(e){
    if (e.keyCode == 38 || e.keyCode == 32) { 
       document.getElementById('sound1').play();
       return false;
    }
	
});
});    
