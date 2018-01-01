//Player score
var wins   = 0;
var losses = 0;

//Character nameBank, imageBank (corresponding indices)
var nameBank    = [ "PACMAN", "XENOMORPH", "SUBZERO", "SAMUSARAN", "SCORPION", "ZELDA", "DONKEYKONG" ];

var imageBank 	= [ "assets/images/pacman.jpg", "assets/images/xenomorph.png", "assets/images/subzero.png",
					"assets/images/samusaran.jpg", "assets/images/scorpion.jpg", "assets/images/zelda.jpg",
					"assets/images/donkeykong.jpg"];
	
//Sound effects	
var music 	= new Audio('assets/audio/audioAsset.mp3');
var correct = new Audio('assets/audio/winSound.mp3');
music.play();

newGame();

function newGame(){
	//Declare a random index from 0 to nameBank.length
	var currentWord = Math.floor(nameBank.length * Math.random());
	//Declare hiddenWord to equal the random name, replacing all chars with underscores
	var hiddenWord 	= nameBank[currentWord].replace(/[A-Z]/g, '_');

	//Declare lettersUsed equal to an empty array, guesses equal to 15
	var lettersUsed = [];
	var guesses 	= 15;

	//Reference the specified elements in index.html
	var winCount       = document.getElementById("winCount");
	var lossCount  	   = document.getElementById("lossCount");
	var element        = document.getElementById("wordHere");
	var guessCount     = document.getElementById("guessCount");
	var letterDisplay  = document.getElementById("letters");
	var imageDisplay   = document.getElementById("character");

	//Assign variables to the headers
	element.innerHTML 	 = hiddenWord;
	guessCount.innerHTML = guesses;
	winCount.innerHTML 	 = "Wins: " + wins;
	lossCount.innerHTML  = "Losses: " + losses;
	letterDisplay.innerHTML = lettersUsed;
	imageDisplay.src = imageBank[currentWord];
			
	var theWord    = nameBank[currentWord]; //Simple reference to the word
	var revealWord = hiddenWord; //Will be split into array, changed, then joined


	//Check if user presses/releases a key
	document.onkeyup = function(event){
		var letter = event.key;
		var capitalLetter = letter.toUpperCase();

		//If letter not used before and user can guess
		if (lettersUsed.indexOf(capitalLetter) == -1 && guesses > 0){
			//Push to lettersUsed[] array and update the html
			lettersUsed.push(capitalLetter);
			letterDisplay.innerHTML = lettersUsed; //Update the header/innerHTML
					
			//If letter is in theWord
			if (theWord.indexOf(capitalLetter) !== -1){
				
				//Split string to array
				revealWord = hiddenWord.split('');
				//Iterate through theWord. Find the index of all occurrences.
				for (var i = 0; i < theWord.length; i++){
					//If capitalLetter identical to char in theWord
					if (theWord[i] === capitalLetter){
						//Replace revealWord's underscore at that index w/ capitalLetter
						revealWord[i] = capitalLetter;
						//Convert to revealWord to string, hiddenWord equals this string
						hiddenWord = revealWord.join('');
						//Update page with new string
						element.innerHTML = hiddenWord; 
					}
				}

				//If hiddenWord matches theWord
				if (hiddenWord === theWord){
					correct.play();
					//Increment wins, update html
					winCount.innerHTML = "Wins: " + (wins++);
					//Start new game after 2 seconds
					setTimeout(function(){ newGame(); }, 2000);
				}
			}
			//If it is not in array, and not in theWord
			else {
				guesses -= 1;
				guessCount.innerHTML = guesses;
				if (guesses < 1){
					//Increment losses, update html
					lossCount.innerHTML = "Losses: " + (losses++);
					//Start new game after 2 seconds
					setTimeout(function(){ newGame(); }, 2000);
				}
			}
		}
	}
}