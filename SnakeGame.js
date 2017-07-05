window.onload = function () {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = canvas.width/2/20, y = canvas.height/2/20;
	var vx = -1, vy = 0;
	var snake = [];
	setInterval(game, 1000/10);
	keyPressed();

	function game() {
		context.fillStyle = "black";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "green";
		for (var i = 0; i < 5; i++) {
			snake[i]=[x+i, y];
		}
		for (var i = 0; i < snake.length; i++) {	
			context.fillRect(snake[i][0]*20, snake[i][1]*20, 20, 20);
		}
		x+=vx;
		y+=vy;
	}

	function keyPressed() {
		document.addEventListener("keydown", function(event) {
			switch (event.keyCode) {
			case 37:
				vx=-1; vy=0;
				break;
			case 38:
				vy=-1; vx=0;
				break;
			case 39:
				vx=1; vy=0;
				break;
			case 40:
				vy=1; vx=0;
				break;
			}
		})
	}

}