

//  Start on click.
$("#startButton").on("click", function() {
    //  Set the button alert's timeout to run three seconds after the function's called.
    delayButtonAlert = setTimeout(function() {
      alert("Alert #2");
    }, 3000);
  });


  //figuring out correct option chosen

  function submitAnswer() {
    var radios = document.getElementsByName("panel-primary");
    var checked = false;
    var userAnswer;
    
    for(var i = 0; i < radio.length; i++ ) {
       if(radios[i].checked) {
         checked = true;
         userAnswer = radios[i].value;
       }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      alert("please select choice answer");
      return;
    }
    // Correct answer
    if(userAnswer === "TRUE") {
       alert("Answer is correct!");
    }
    // incorrect answer
    else {
       alert("Answer is wrong!");
    }
    