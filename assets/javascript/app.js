	/**Global variables*/
	var intervalId;
	var timer = 11;
	var wrong = 0;
	var correct = 0;
	var unanswered;
	var questionIndex = 0;
	var number = 30;
	var started = false;

	var randomFactsQuestions = [

	{
		question: "The Gettysburg address was a speech given by which U.S. president?",
		answer1: "President Abraham Lincoln",
		answer2: "President Theodore Roosevelt",
		answer3: "President Ronald Reagan",
		answer4: "President Thomas Jefferson",
		correctAnswer: "President Abraham Lincoln",
		correctInfo: "The correct answer was: 'President Abraham Lincoln'"
	},

	{
		question: "In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?",
		answer1: "10 percent",
		answer2: "15 percent",
		answer3: "31 percent",
		answer4: "51 percent",
		correctAnswer: "31 percent",
		correctInfo: "The correct answer was: '31 percent'"

	},

	{
		question: "When did the Liberty Bell get its name?",
		answer1: "When it was made, in 1701",
		answer2: "When it rang on July 4, 1776",
		answer3: "In the 19th century, when it became a symbol of the abolition of slavery",
		answer4: "None of the above",
		correctAnswer: "In the 19th century, when it became a symbol of the abolition of slavery",
		correctInfo: "The correct answer was: 'In the 19th century, when it became a symbol of the abolition of slavery'"
	},

	{
		question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
		answer1: "Home computer",
		answer2: "Compact disk player",
		answer3: "Cordless phone",
		answer4: "Dishwasher",
		correctAnswer: "Compact disk player",
		correctInfo: "The correct answer was: 'Compact disk player'"
	},

	{
		question: "Who holds the record for the most victories in a row on the professional golf tour?",
		answer1: "Jack Nicklaus",
		answer2: "Arnold Palmer",
		answer3: "Byron Nelson",
		answer4: "Ben Hogan",
		correctAnswer: "Byron Nelson",
		correctInfo: "The correct answer was: 'Byron Nelson'"
	},

	{
		question: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
		answer1: "8",
		answer2: "18",
		answer3: "38",
		answer4: "58",
		correctAnswer: "18",
		correctInfo: "The correct answer was: '18'"
	},

	{
		question: "The first black American pictured on a U.S. postage stamp was who?",
		answer1: "Frederick Douglass",
		answer2: "Booker T. Washington",
		answer3: "Louis Armstrong",
		answer4: "Joe Louis",
		correctAnswer: "D. Joe Louis",
		correctInfo: "The correct answer was: 'D. Joe Louis'"
	},

	{
		question: "What did the 'D' in 'D-Day' stand for?",
		answer1: "Doom",
		answer2: "Day",
		answer3: "Dwight (Eisenhower)",
		answer4: "Dunkirk",
		correctAnswer: "Day",
		correctInfo: "The correct answer was: 'Day'"
	},

	{
		question: "Which of these characters turned 40 years old in 1990",
		answer1: "Charlie Brown",
		answer2: "Bugs Bunny",
		answer3: "Mickey Mouse",
		answer4: "Fred Flintstone",
		correctAnswer: "Charlie Brown",
		correctInfo: "The correct answer was: 'Charlie Brown'"
	},

	{
		question: "The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?",
		answer1: "$1",
		answer2: "$5",
		answer3: "$10",
		answer4: "$20",
		correctAnswer: "$1",
		correctInfo: "The correct answer was: '$1'"
	}

	]

	var questionsLength = randomFactsQuestions.length;
	
	function displayQuestion() {


		//decrease timer and display it on screen in the timer div
		intervalId = setInterval(decrement, 1000);
		
		function decrement() {
			number--;
			console.log(number)
			$(".time-display").text("Time Remaining: ").append(number);

			// if the timer reaches 0, call noTime()
			if (number === 0) {
				noTime();
			}
		}

		$(".question").text(randomFactsQuestions[questionIndex].question)
		$(".answer-1").text(randomFactsQuestions[questionIndex].answer1)
		$(".answer-2").text(randomFactsQuestions[questionIndex].answer2)
		$(".answer-3").text(randomFactsQuestions[questionIndex].answer3)
		$(".answer-4").text(randomFactsQuestions[questionIndex].answer4)
		$('.answer-buttons').show();

	}

	function noTime(){
	// $('.button').off("click");
	$('.question').text("Time's Up!").css({"color" : "red", "font-size" : "5em"});
	$('.answer-buttons').hide();
	clearInterval(intervalId);
	console.log(intervalId)
	questionIndex++;
	unanswered++
	clearInterval(intervalId);
	if ( questionIndex == questionsLength){
		setTimeout(endScreen, 1000 * 2);
	} else {
		setTimeout(displayQuestion, 1000 * 2);
	}
}
function endScreen(){
	$('.answer-buttons').show();
	$('.question').text("That's the end of the game! Here's how you did:").css({"color" : "white", "font-size" : "3em"});
	$('.answer-1').text("Correct answers: " + correct );
	$('.answer-2').text("Wrong answers: " + wrong );
	$('.answer-3').text("Unanswered: " + unanswered );
	$('.answer-4').text(" Click Here To Play Again");
	$('.answer-4').on("click", function(){
		gameReset();
		displayQuestion();
 	});

}


function gameReset() {
	questionIndex = 0;
	correct = 0;
	wrong = 0;
	unanswered = 0;

	return questionIndex;
	return correct;
	return wrong;
	return unanswered;
}

function checkAnswers(text){

	if(text == randomFactsQuestions[questionIndex].correctAnswer){

		correctAnswer()
	}
	else{
		wrongAnswer()
	}
}

function correctAnswer(){
	$('.answer-buttons').hide();
	$('.question').text("You are correct!");
	correct++;
	questionIndex++;
	setTimeout(displayQuestion,2000)
	clearInterval(intervalId);
	if ( questionIndex == questionsLength){
		setTimeout(endScreen, 1000 * 2);
	} else {
		setTimeout(displayQuestion, 1000 * 2);
	}
}

function wrongAnswer(){		
	$('.answer-buttons').hide();
	console.log("wrong answer")
	$('.question').text(randomFactsQuestions[questionIndex].correctInfo);
	wrong++;
	questionIndex++;
	setTimeout(displayQuestion,2000)
	clearInterval(intervalId);
	if ( questionIndex == questionsLength){
		setTimeout(endScreen, 1000 * 2);
	} else {
		setTimeout(displayQuestion, 1000 * 2);
	}
}

$(document).ready(function(){

	$('.answer-1').text("Click Here To Start!");
	$('.answer-2').hide();
	$('.answer-3').hide();
	$('.answer-4').hide();
	$('.button').on("click", function(event){
		if (!started){
			started = true;
			$('.answer-2').show();
			$('.answer-3').show();
			$('.answer-4').show();
			displayQuestion();
			return;
		}
		var buttonText = $(this).text()
		console.log(buttonText)
		$('.answer-2').show();
		$('.answer-3').show();
		$('.answer-4').show();
		displayQuestion();
		checkAnswers(buttonText);
	});
});

