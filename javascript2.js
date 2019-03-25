// if we click on the start /reset button
var playing=false;
var score;
var action;
var timeremaing;
document.getElementById("startreset").onclick=
function(){
    if(playing==true){
        location.reload();

    }
    else{ //if we are not playing 
        //set score 0
        //chnage to playing mode
        playing=true;

        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        //show countdown box
          show("timeremaing");
          timeremaing=60;
          document.getElementById("timeremaingvalue").innerHTML=timeremaing;

          // hide game over box
          hide("gameover");

           // chnage button to reset
           document.getElementById("startreset").innerHTML="Reset Game";


           // start countdown

           startCountdown();

           // generate a new questions and answers

           generateQA();
    }

}

function startCountdown(){

action=setInterval(function(){

    timeremaing-=1;
    document.getElementById("timeremaingvalue").innerHTML=timeremaing;
    if(timeremaing==0){ //game over
      stopCountdown();
     show("gameover");

      document.getElementById("gameover").innerHTML="<p> Game Over!</p><p>Your Scorre is "+ score + "</p>"



     hide("timeremaing");
     hide("correct");
     hide("wrong");

     playing=false;
     document.getElementById("startreset").innerHTML="Start Game";
    }

},1000);
}

//function stop countdown
function stopCountdown(){
    clearInterval(action);
}


// hide an element 

function hide(Id){

    document.getElementById("Id").style.display="none";
}

//show element
function show(Id){
 document.getElementById("Id").style.display="block";



}

function  generateQA(){


}
//if we are playing
//reload page
//if we are not playing 
//set score 0
//show coountdown box
//reduce time by 1sec in 
//loops  
//time left?
// yes continoue
//no game over
 // chnage button to reset
 // generate new Q&A


 //if we click on an answer box
 // if we are playing 
 //correct?
  // yes
  // increase score 
  // show correct box for 1 sec
  // new quetions and answers 

  //if answer is wrong  
  //show try again inbox for 1 sec
