// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge of the L.o.C. Classification System",
        "main":    "<p>Hope you studied...here we go!</p>",
        "results": "<h5>Learn More</h5><p>Sources for this slider project include the <a href='http://loc.gov'>Library of Congress</a> website and the <a href='http://www.library.unc.edu'>UNC library</a> website.  All photographs, aside from screenshots, are my own.</p>",
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
	
        { // Question 4
            "q": "True or False, Herbert Putnam was Librarian of Congress for 40 years.",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Yay!</span> You got it! (40 years is a long time, huh?)</p>",
            "incorrect": "<p><span>Sorry!</span> It's okay that you're wrong...</p>" // no comma here
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
