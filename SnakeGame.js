window.onload = function () {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = Math.floor(canvas.width/2/20), y = Math.floor(canvas.height/2/20);
	var vx = -1, vy = 0;
	var snake = []; 
	var prey = newPrey();
	for (var i = 0; i < 5; i++) {
		snake[i]=[x+4-i, y];
	}
	setInterval(frame, 1000/10);
	keyPressed();

	function newPrey() {
		return [Math.floor(canvas.width/20*Math.random()), Math.floor(canvas.height/20*Math.random())];
	};

	function frame() {
		context.fillStyle = "black";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "green";
		for (var j = snake.length-2; j >=0; j--) {
			if (x+1>snake[j][0] && y<snake[j][1]+1 && x<snake[j][0]+1 && y+1>snake[j][1]) {
				for (var k = 0; k <= j; k++) {
					snake.shift();
				}
			}
		}
		for (var i = snake.length-1; i>=0 ; i--) {	
			context.fillRect(snake[i][0]*20, snake[i][1]*20, 20, 20);
		}
		context.fillRect(prey[0]*20, prey[1]*20, 20, 20);
		x+=vx; y+=vy;
		if (x+1>prey[0] && y<prey[1]+1 && x<prey[0]+1 && y+1>prey[1]) {
			snake.push([x, y]);
			x+=vx; y+=vy;
			prey = newPrey();
		}
		if (x*20+20>canvas.width) x=0;
		if (x*20<0) x=Math.floor(canvas.width/20);
		if (y*20+20>canvas.height) y=0;
		if (y*20<0) y=Math.floor(canvas.height/20);
		snake.shift();
		snake.push([x, y]);
	}

	function keyPressed() {
		document.addEventListener("keydown", function(event) {
			switch (event.keyCode) {
			case 37:
				if (vx==0) {vx=-1; vy=0;}
				break;
			case 38:
				if (vy==0) {vy=-1; vx=0;}
				break;
			case 39:
				if (vx==0) {vx=1; vy=0;}
				break;
			case 40:
				if (vy==0) {vy=1; vx=0;}
				break;
			}
		})
	}

}
