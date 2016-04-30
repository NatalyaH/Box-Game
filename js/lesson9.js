	var myElement; // declare global element variable
	var myInterval; // declare global interval variable
		
	// Arrow Key functions - all include if statements that bound the square to the outer box 
	// if box touches outer edges restartMe() activates  

		function doMove() {
				myElement.style.left = parseInt(myElement.style.left)+1+'px';
				myElement.innerHTML="Click To Stop!";
				if (myElement.style.left == '670px') {
					restartMe();
				}
		}

		function moveLeft(){ 
				myElement.style.left = parseInt(myElement.style.left)-1+'px';
				myElement.innerHTML="Click To Stop!";
				if (myElement.style.left == '13px') {
					restartMe();
				}
		}


		function moveUp(){ 
				myElement.style.top = parseInt(myElement.style.top)-1+'px';
				myElement.innerHTML="Click To Stop!";
				if (myElement.style.top == '62px') {
					restartMe();
				}
		}

		function moveDown(){ 
				myElement.style.top = parseInt(myElement.style.top)+1+'px';
				myElement.innerHTML="Click To Stop!";
				if (myElement.style.top == '472px') {
							restartMe();
				}
		}

	
		function checkKey(e){ 
	//action activates when up arrow is pressed
				if (event.keyCode == 38){
					clearInterval(myInterval);
					myInterval = setInterval(moveUp, 5);
				}
	//action activates when down arrow is pressed 
				else if(event.keyCode == 40){
					clearInterval(myInterval);
					myInterval = setInterval(moveDown, 5);
				}
	//action activates when right arrow is pressed
				else if(event.keyCode == 39){
					clearInterval(myInterval); 
					myInterval = setInterval(doMove, 5);
				}
	//action activates when left arrow is pressed
				else if(event.keyCode == 37){
					clearInterval(myInterval);
					myInterval = setInterval(moveLeft, 5);
				}
		}

	// End Key funcions 

		// when restartMe() activates (box refreshes to center) it also uses stopMe() 

		function restartMe() {
				myElement.style.left= "300px";
				myElement.style.top= "250px";
				stopMe();
		}
		
		function stopMe() {
				window.clearInterval(myInterval);
				myElement.innerHTML="Double Click To Start!";
		}
		
		function restartMove(){
				myInterval=setInterval(doMove,5);
		}

		// when box is dragged it shows client distance of box in px
		
		function followMe(e) {
				var xPos= e.clientX; //Get x value from clients mouse
				myElement.style.left=xPos+"px";
				myElement.innerHTML="You are at"+xPos+"px";
		}
		
		function init() {
				myElement = document.getElementById('myDiv');
				myElement.style.left = '300px'; //initial position of box
				myElement.style.top = '250px'
				myInterval = setInterval(doMove,5);
				document.getElementById("restartBtn").addEventListener("click", restartMe);
				myElement.addEventListener("click", stopMe);
				myElement.addEventListener("dblclick", restartMove);
				myElement.addEventListener("drag", followMe);
				myElement.addEventListener("dragend", followMe);
				window.addEventListener("keydown", checkKey);
		}

		


		window.onload = init;	// init() is called when page loads 
