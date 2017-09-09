/*var score = 0;
var losses = 0;
		
var music = new Audio('../audio/audioAsset.mp3');
music.play();

function newGame(){

	var wordBank = ["PACMAN", "XENOMORPH", "SUBZERO", "SAMUSARAN", "SCORPION", "ZELDA", "DONKEYKONG"];
	var currentWord = Math.floor(wordBank.length * Math.random());
	var currentPicture = ["../images/pacman.jpg", "../images/xenomorph.png", "../images/subzero.png", "../images/samusaran.jpg", "../images/scorpion.jpg", "../images/zelda.jpg", "../images/donkeykong.jpg"];
	var hiddenWord = wordBank[currentWord].replace(/[A-Z]/g, '_');
	var lettersUsed = [];
	var guesses = 15;
	//Reference to the headers in index.html
	var element = document.getElementById("wordHere");
	var guessCount = document.getElementById("guessCount");
	var winCount = document.getElementById("winCount");
	var lossCount = document.getElementById("lossCount");
	var letterDisplay = document.getElementById("letters");
	var pictureDisplay = document.getElementById("pictureHere");
	//Assign variables to the headers
	element.innerHTML = hiddenWord;
	guessCount.innerHTML = guesses;
	winCount.innerHTML = "Wins: " + score;
	lossCount.innerHTML = "Losses: " + losses;
	letterDisplay.innerHTML = lettersUsed;
	pictureDisplay.src = currentPicture[currentWord];
			
	var theWord = wordBank[currentWord]; //Simple reference to the word
	var revealWord = hiddenWord; //Will be split into array, changed, then joined


	//Check if user presses/releases a key
	document.onkeyup = function(event){
		var letter = event.key;
		var capitalLetter = letter.toUpperCase();

		//If letter not used before
		if (!lettersUsed.includes(capitalLetter) && guesses > 0){
			//Push to this array
			lettersUsed.push(capitalLetter);
			letterDisplay.innerHTML = lettersUsed; //Update the header/innerHTML
					
			//If letter is in theWord, Note: Use .indexOf()
			if (theWord.includes(capitalLetter)){
				//Splits string to array, is now a mutable string
				revealWord = hiddenWord.split('');
				//Iterate through theWord. Find the index of all occurrences.
				for (var i = 0; i < theWord.length; i++){
					//If capitalLetter identical to char in theWord
					if (theWord[i] === capitalLetter){
						//Replace revealWord's underscore at that index w/ capitalLetter
						revealWord[i] = capitalLetter;
						//Becomes string form of that array/mutable string
						hiddenWord = revealWord.join('');
						//Update page with new string
						element.innerHTML = hiddenWord; 
					}
				}
				//If hiddenWord matches theWord
				if (hiddenWord === theWord){
					score ++;
					winCount.innerHTML = "Wins: " + score;
					alert(hiddenWord + "!" + " Nice!");
					newGame();
				}
			}
			//If it is not in array, and not in theWord
			else {
				guesses -= 1;
				guessCount.innerHTML = guesses;
				if (guesses < 1){
					losses ++;
					lossCount.innerHTML = "Losses: " + losses;
					alert("Don't get hung up on it, you'll do better next time!");
					newGame();
				}
			}
		}
	}
}
newGame();
*/