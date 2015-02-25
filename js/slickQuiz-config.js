// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge of the L.o.C. Classification System",
        "main":    "<p>Hope you studied...here we go!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Master Librarian! You should enroll in UNC SILS!",
        "level2":  "Almost Master Librarian",
        "level3":  "Elementary Librarian",
        "level4":  "You probably pronounce it li-bary, don't you?",
        "level5":  "Have you ever even been to a library?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Here's an easy one.  What does L.o.C. mean?",
            "a": [
                {"option": "Library of Catalogs",      "correct": false},
                {"option": "List of Cats",     "correct": false},
                {"option": "Library of Congress",      "correct": true}
            ],
            "correct": "<p><span>That's right!</span> You smart.</p>",
            "incorrect": "<p><span>Uhh no.</span> This was <em>literally</em> the easiest question!!!!!</p>" // no comma here
        },
			{ // Question 2 - Multiple Choice, Single True Answer
		"q": "In what year was the Library of Congress classification system invented?",
		"a": [
			{"option": "1897",      "correct": true},
			{"option": "1500",     "correct": false},
			{"option": "1952",      "correct": false}
		],
		"correct": "<p><span>That's right!</span> Good job!</p>",
		"incorrect": "<p><span>Sorry!</span> Don't cry! It's okay.</p>" // no comma here
	},
			{ // Question 3 - Multiple Choice, Single True Answer
		"q": "If a book has a call number of B176.5 R83 2014, what year was it published?",
		"a": [
			{"option": "1765",      "correct": false},
			{"option": "2014",     "correct": true},
			{"option": "1983",      "correct": false}
		],
		"correct": "<p><span>That's right!</span> Maybe this quiz is too easy.</p>",
		"incorrect": "<p><span>Sorry!</span> You'll get 'em next time." // no comma here
	},
	
        // { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            // "q": "Which of the following best represents your preferred breakfast?",
            // "a": [
                // {"option": "Bacon and eggs",               "correct": false},
                // {"option": "Fruit, oatmeal, and yogurt",   "correct": true},
                // {"option": "Leftover pizza",               "correct": false},
                // {"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            // ],
            // "select_any": true,
            // "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            // "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        // },
        // { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            // "q": "Where are you right now? Select ALL that apply.",
            // "a": [
                // {"option": "Planet Earth",           "correct": true},
                // {"option": "Pluto",                  "correct": false},
                // {"option": "At a computing device",  "correct": true},
                // {"option": "The Milky Way",          "correct": true} // no comma here
            // ],
            // "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            // "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        // },
        { // Question 4
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "True or False, Most research and academic libraries (like at UNC) use the L.o.C classification system.",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Yay</span> You got it!</p>",
            "incorrect": "<p><span>ERRRR!</span> Have you been to any of the libraries here?!</p>" // no comma here
        } // no comma here
    ]
};
