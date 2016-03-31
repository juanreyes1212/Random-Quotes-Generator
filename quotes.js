$(document).ready(function(){
	var quoteOrigin = [
		{
			quote: "Show me again, grandfather, and I will finish what you started.",
			person: "Kylo Ren"
		},
		{
			quote: "Is that possible? I never ask that question until after we've done it.",
			person: "Han Solo's answer to Rey"
		},	
		{
			quote: "Women always figure out the truth. Always.",
			person: "Han Solo"
		},
		{
			quote: "Captain, being held by you isn't quite enough to get me excited.",
			person: "Princess Leia"
		},
		{
			quote: "You're afraid you'll never be as powerful as Darth Vader.",
			person: "Rey"
		},
		{
			quote: "That lightsaber, it belongs to me!",
			person: "Kylo Ren"
		},
		{
			quote: "Han Solo, I've been waiting for  this day for a long time",
			person: "Kylo Ren"
		},
		{
			quote: "The one from the village, FN2187",
			person: "Kylo Ren"
		},
		{
			quote: "Do you have a boyfriend? Do you have a cute boyfriend?",
			person: "Finn"
		},
		{
			quote: "Try not! Do or do not, there is no try.",
			person: "Yoda"
		},
		{
			quote: "Train yourself to let go of everything you fear to lose.",
			person: "Yoda"
		}

	];	//end quoteOrigin

	$("#quoteBtnActual").click(function(evt){
		//define quoteContainer to target
		var quote = $("#quoteSpace #quoteQuote").text();
		var person = $("#quoteSpace #quotePerson").text();
		//prevent browser default?
		evt.preventDefault();
		//randomly choose quote with limit
		var originLength = quoteOrigin.length;
		var randomNumber = Math.floor(Math.random() * originLength);
		//set new quote after each click event
		for (var i = 0; i < originLength; i+=1) {
			var newQuoteQuote = quoteOrigin[randomNumber].quote;
			var newQuotePerson = quoteOrigin[randomNumber].person;
			//fadeOut with callback
			var animateTime = 500;
			var quoteSpace = $("#quoteSpace");
			quoteSpace.fadeOut(animateTime, function(){
				quoteSpace.html("");
				quoteSpace.append('<h4 id="quoteQuote">'+newQuoteQuote+'</h4>'+'<h4 id="quotePerson">'+'- '+newQuotePerson+'</h4>');
				//fadeIn
				quoteSpace.fadeIn(animateTime);
			});
			break;
		}	//end of for loop
		}); //end of click function
});	//end document ready