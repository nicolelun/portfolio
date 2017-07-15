var firstNameLetters = ["n", "i", "c", "o", "l", "e"];
var lastNameLetters = ["l", "u", "n"];
var studioLetters = ["d", "e", "s", "i", "g", "n"];

// NOTE: Retrieve the objects to hold the expression
var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name");
var studio = document.querySelector("#studio");

// NOTE: Construct first name
for (var i = 0; i < firstNameLetters.length; i += 1) {
	var letter = document.createElement("span");
	letter.textContent = firstNameLetters[i];
	letter.className = "letter-name";
	letter.style.animationDelay = 0.5 + (randNum(0, 0.2) * i) + "s";
	
	firstName.appendChild(letter);
}

// NOTE: Construct last name
for (var i = 0; i < lastNameLetters.length; i += 1) {
	var letter = document.createElement("span");
	letter.textContent = lastNameLetters[i];
	letter.className = "letter-name";
	letter.style.animationDelay = 1 + (randNum(0, 0.2) * i) + "s";
	
	lastName.appendChild(letter);
}

// NOTE: Construct studio name
for (var i = 0; i < studioLetters.length; i += 1) {
	var letter = document.createElement("span");
	letter.textContent = studioLetters[i];
	letter.className = "letter-studio";
	letter.style.animationDelay = 1 + (randNum(0, 0.2) * i) + "s";
	
	studio.appendChild(letter);
}

