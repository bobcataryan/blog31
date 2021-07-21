player1_name=localStorage.getItem("player1_name")+": ";
player2_name=localStorage.getItem("player2_name")+": ";
player1_score=0;
player2_score=0;
question_turn="player1";
answer_turn="player2";
operator=""
    document.getElementById("player1_name").innerHTML=player1_name;
    console.log(player2_name);
    document.getElementById("player2_name").innerHTML=player2_name;
    console.log(player2_name);
    document.getElementById("player2_score").innerHTML=player2_score;
    console.log(player2_score);
    document.getElementById("player1_score").innerHTML=player1_score;
    console.log(player1_score);
    document.getElementById("question_turn").innerHTML="question turn: "+player1_name;
    document.getElementById("answer_turn").innerHTML="answer turn:"+player2_name;
function add(){
    operator="+";
}
function sub(){
    operator="-";
}
function mul(){
    operator="*"
}
function divvy(){
    operator="/"
}
function send(){
number1=document.getElementById("number1_input").value;
number2=document.getElementById("number2_input").value;
if (operator=="+"){
ans=number1+number2;
console.log(ans);
}
if (operator=="-"){
ans=number1-number2;
console.log(ans);
    }
if (operator=="*"){
ans=number1*number2;
console.log(ans);
        }
 if (operator=="/"){
 ans=math.floor(number1/number2);
 console.log(ans);
            }
question="Q- <label>" +number1+' '+operator+' '   +number2 + "</label>";
input_tag="<br> <input type='number' id='answer' class='form-control'placeholder='Enter Answer Here'>";
button_tag="<br> <button onclick='check()' class='btn btn-success'>check</button>";
total=question+input_tag+button_tag;
document.getElementById("Guess").innerHTML=total;
}

function check(){
   answer=document.getElementById("answer").value;
    console.log(answer);
    if (answer==ans){
    if (answer_turn=="player1"){
        player1_score++;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score++;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
    }
    if (answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("answer_turn").innerHTML="Answer turn- " +player2_name;
        console.log(answer_turn);
    }
    else{
        answer_turn="player1";
        document.getElementById("answer_turn").innerHTML="Answer turn- " +player1_name;
    }
    if (question_turn=="player1"){
        question_turn="player2";
        document.getElementById("question_turn").innerHTML="Question turn- " +player2_name;
        console.log(question_turn);
    }
    else {
        question_turn="player1";
        document.getElementById("question_turn").innerHTML="Question turn- " +player1_name;
    }
    document.getElementById("Guess").innerHTML="";
    }