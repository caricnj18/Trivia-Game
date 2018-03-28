//global variables
var counter = 30;
var correct = 0;
var incorrect =0;
var timeInterval;

var questions = [{
    question: "Question #01: Mushu was originally supposed to be a human trapped in a dragons form, with him and Mulan falling in love at the end of the film",
    answers: ["TRUE", "FALSE"],
    answer: 0,
  },
  {
    question: "Question #02: Tiana is left handed.",
    answers: ["TRUE", "FALSE"],
    answer: 0,
  },
  {
    question: "Question #03: Boo's real name is Mary.",
    answers: ["TRUE", "FALSE"],
    answer: 0,
  },
  {
    question: "Question #04: Hyena researchers thought that they were unfairly portrayed in the film.",
    answers: ["TRUE", "FALSE"],
    answer: 0,
  },
  {
    question: "Question #05: In the first sketches of Ariel she was a brunette.",
    answers: ["TRUE", "FALSE"],
    answer: 1,
  },
  {
    question: "Question #06: The dwarfs in the 'Snow White' only have three fingers and one thumb.",
    answers: ["TRUE", "FALSE"],
    answer: 0,
  },
  {
    question: "Question #07: Andy is 21 in Toy Story 3.",
    answers: ["TRUE", "FALSE"],
    answer: 1,
  },
  {
    question: "Question #08: Kristen Bell played Priscilla the sloth in Zootopia.",
    answers: ["TRUE", "FALSE"],
    answer: 0,
  }
];


function createQuestions(questions) { //loop through questions
  $("#questions").empty();

  for (var i = 0; i < questions.length; i++) {

    var $panel = $("<div>").addClass("panel panel-primary");
    var $question = $("<h4>").text(questions[i].question);


    $panel.append($question); //question into panel

    for (var j = 0; j < questions[i].answers.length; j++) { //loop through answers
      var $label = $("<label>").addClass("radio-inline").text(questions[i].answers[j]);
      var $input = $("<input>", {
        type: "radio",
        name: "question_" + i,
        value: j,
      });
      $label.append($input).appendTo($panel);

    }
    $("#questions").append($panel); //into the html
  }
}



function endQuiz() {
  clearInterval(timeInterval);
  console.log("endquiz")
  
  
  $.each($('input[name="question-0"]:checked'), function(){
    if($(this).val() == questions[0].answer){
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($('input[name="question-1"]:checked'), function(){
    if($(this).val() == questions[1].answer){
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($('input[name="question-2"]:checked'), function(){
    if($(this).val() == questions[2].answer){
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($('input[name="question-3"]:checked'), function(){
    if($(this).val() == questions[3].answer){
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($('input[name="question-4"]:checked'), function(){
    if($(this).val() == questions[4].answer){
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($('input[name="question-5"]:checked'), function(){
    if($(this).val() == questions[5].answer){
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($('input[name="question-6"]:checked'), function(){
    if($(this).val() == questions[6].answer){
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($('input[name="question-7"]:checked'), function(){
    if($(this).val() == questions[7].answer){
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($('input[name="question-8"]:checked'), function(){
    if($(this).val() == questions[8].answer){
      game.correct++;
    } else {
      game.incorrect++;
    }
  });

  
  $("#questions").empty();
  $("#questions").text("showResults");
}

//  Start on click.
$("#startButton").on("click", function () {
  //  Set the button alert's timeout to run three seconds after the function's called.
  timeInterval = setInterval(function () {
    counter--;
    $("#timer").text("Time Remaining: " + counter);

    if (counter <= 0) {
      endQuiz()
    }
  }, 1000);

  counter =30;
  createQuestions(questions);
  $("#timer").text("Time Remaining: " + counter);
});

//  Done on click.
$("#finished").on("click", function (endQuiz) {
  

  endQuiz()
});








