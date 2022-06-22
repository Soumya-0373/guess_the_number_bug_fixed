var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
    
msg1.textContent = "Guess It!!!!";

var answer = Math.floor(Math.random()*100)+1; // This will guess a number between 1 to 100
var no_of_guesses = 0;//Count the Number of Guesses.
var guessed_numbers = [];//Stores the Numbers those have chosen.

//For Clearing the Space of the Input.
let BtnClear = document.querySelector('#my_btn');
let input = document.querySelectorAll('input');
     
     BtnClear.addEventListener('click',()=>{
        input.forEach(input=>input.value='');
    });
    
    //For the Reset Button
    document.querySelector('#reset').addEventListener('click',function(){
        no_of_guesses = 0;
        answer = Math.floor(Math.random()*100)+1;
        guessed_numbers = [];
        msg1.textContent = "Guess It!!!!";
        msg2.textContent = "";
        msg3.textContent = "";
        document.querySelector('body').style.backgroundColor = '#9af5f5';
    })
//For the Reset Button
// function reset(){
//     location.reload();
// }    
// Main Logic Of the Program.    
function play(){
    var user_guesses = document.getElementById("guess").value;
    
    if(user_guesses<1||user_guesses>100){
        alert("Please Enter a Valid Number!!");
        BtnClear.addEventListener('click',()=>{
            input.forEach(input=>input.value='');
        });

    }
    else{
        guessed_numbers.push(user_guesses);
        no_of_guesses++;

        if(user_guesses<answer){
            msg1.textContent = "Your Guess is Too low";
            msg2.textContent = "Your Guesses are "+guessed_numbers;
        }
        else if(user_guesses>answer){
            msg1.textContent = "Your Guess is Too high";
            msg2.textContent = "Your Guesses are "+guessed_numbers;
        }
        else if(user_guesses==answer){
            msg1.textContent = "Yooooo!!! You have Guessed The Number!!!";
            msg3.textContent = "You have Guessed it in "+(no_of_guesses)+" attempts";
            document.getElementById("my_btn").disbled = true;
            document.querySelector('body').style.backgroundColor = '#49f588';
        }
    }
}