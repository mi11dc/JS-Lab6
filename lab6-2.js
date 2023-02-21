//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady() {

	var userInput;
	var userInputPopupTxt = "Do you want to see something?";
	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBoxElement = document.getElementById("mysteryBox");
	var buttonBoxElement = document.getElementById("buttonBox");

	console.log(buttonBoxElement.closest('h2'));

	//====CREATE THE FUNCTIONS WE'LL NEED====
	mysteryBoxElement.onmouseover = createPopup;
	//FUNCTION TO ASK USER
	function createPopup() {
		userInput = confirm(userInputPopupTxt);
		if (userInput === true) {
			mysteryBoxElement.style.display = "none";
			buttonBoxElement.style.display = "block";

			buttonBoxElement.onclick = clickButtonBox;
			buttonBoxElement.style.cursor = "pointer";
		}
	}

	//FUNCTION TO CHANGE buttonBox
	function clickButtonBox() {
		buttonBoxElement.style.width = "600px";
		buttonBoxElement.style.backgroundColor = "orange";
		buttonBoxElement.style.cursor = "";

		// Method 1
		buttonBoxElement.innerHTML = "<h2>SURPRISE!!</h2>";

		// Method 2
		// var h2Element = buttonBoxElement.getElementsByTagName("h2")[0];
		// h2Element.innerText = "SURPRISE!!";

		// Method 3
		console.log(buttonBoxElement.closest('h2'));
	}

	//SETUP LISTENERS


//END onload FUNCTION
}