// if we click on the start /reset button
var playing=false;
var score;
var action;
var timeremaing;
var correctAnswer;
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
          document.getElementById("timeremaing").style.display="block";
          timeremaing=60;
          document.getElementById("timeremaingvalue").innerHTML=timeremaing;

           // chnage button to reset
           document.getElementById("startreset").innerHTML="Reset Game";


           // start countdown

           startCountdown();

           generateQA();
    }

}

function startCountdown(){

action=setInterval(function(){

    timeremaing-=1;
    document.getElementById("timeremaingvalue").innerHTML=timeremaing;
    if(timeremaing==0){ //game over
      stopCountdown();
      document.getElementById("gameover").style.display="block";

      document.getElementById("gameover").innerHTML="<p> Game Over!</p><p>Your Scorre is "+ score + "</p>"



      document.getElementById("timeremaing").style.display="none";
    }

},1000);
}
function stopCountdown(){
    clearInterval(action);
}

function generateQA(){

    var x = 1+ Math.round(9*Math.random());
    var y=1+ Math.round(9*Math.random());
     correctAnswer=x * y ;
     document.getElementById("question").innerHTML= x + "x" + y;

     var correctPostion=1+ Math.round(3*Math.random());
     document.getElementById("box" + correctPostion).innerHTML=correctAnswer; // fill one  box with the correct answer

     //fill others boxes with wrong answers
     var answers =[correctAnswer];
     for(i=1;1<5; i++){

        if(i !== correctPostion){
        var wrongAnswer;
        do{
            
        

            var wrongAnswer=(1+ Math.round(9*Math.random()))
            *(1+ Math.round(9*Math.random()));
        
        }
        while(answers.indexOf(wrongAnswer)>-1)

            document.getElementById("box" + i).innerHTML =wrongAnswer;
            answers.push(wrongAnswer);
        }
     }
}
//clikcing on answers box

for(i=1; i<5; i++){

    document.getElementById("box"+i).onclick=function(){

        //if we are playing
        
        if(playing==true){
        
            //yes
            if(this.innerHTML==correctAnswer){
                //score answer
                score++;
                document.getElementById("scorevalue").innerHTML=score;
        
                // hide worng box
        
                document.getElementById("wrong").style.display="none";
                document.getElementById("correct").style.display="block";
        
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000);
        
                // genereate new QA
        
        
                generateQA();
            }else{
        
                document.getElementById("correct").style.display="none";
                document.getElementById("wrong").style.display="block";
        
                setTimeout(function(){
                    document.getElementById("wrong").style.display="none";
                },1000);
            }
        }
        
        }
}