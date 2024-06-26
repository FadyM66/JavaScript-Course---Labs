

alert("Welcome to my website")
var userName = prompt("What is your name?")
alert("Welcome " + userName)



function sumNum(){
    var firstNum = prompt("Enter the first number: ")
    var secondNum = prompt("Enter the second number: ")
    alert(+firstNum + +secondNum)
}

function searchWord(){
    var userString = prompt("Enter a sting: ")
    var word = prompt("Enter a word: ")
    var position = userString.indexOf(word)
    if(position === -1)
        {
        alert("Word not found!")}
    else{
        alert("Word position is " + position)
    }
}



function tempConverter(){
var cel = prompt("enter your celsius temp: ")
var fehr = (9/5 * (+cel)) + 32
alert("Fahrenheit temperature is " + fehr)    
}