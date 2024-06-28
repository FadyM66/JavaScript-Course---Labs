
// Q.1

var photoEvent = document.querySelectorAll(".galaryphoto");
for(var i = 0; i < photoEvent.length; i++) {
    photoEvent[i].addEventListener("mouseover", function() {
        this.style.transition="0.3s"
        this.style.opacity = "0.3";        
    });
    photoEvent[i].addEventListener("mouseout", function() {
        this.style.opacity = "1";
    });
}


// Q.2

var colors = ['red', 'blue', 'yellow']

function color(){
    var index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

var colorchanger = document.querySelector("#colorchanger")
colorchanger.addEventListener("click", function(){

    var text = document.getElementById("texttochange")
    text.style.color=color()
    text.style.background=color()
    text.style.fontSize="26px"
})


// Q.3

var passwordchanger = document.getElementById("passwordchanger")
passwordchanger.addEventListener("click", function(event){
    
    event.preventDefault()
    
    var passwd = document.getElementById("password")

    

    if(passwd.type === "password"){
    passwd.setAttribute("type", "text")
    passwordchanger.innerText="Hide"
    }
    else{
        passwd.setAttribute("type", "password")
        passwordchanger.innerText="Show"
    }
})


// Q. 4

var bankQ = [
    "What is your favorite color?",
    "What is the capital of France?",
    "Who wrote 'Hamlet'?",
    "What year did the Titanic sink?",
    "How many continents are there?",
    "Who painted the Mona Lisa?",
    "What is the chemical symbol for water?",
    "Who is credited with inventing the telephone?",
    "What is the tallest mountain in the world?",
    "Who was the first person to step on the moon?"
]

var next = document.getElementById("next")
var previous = document.getElementById("previous")
var bank = document.getElementById("Bank")
var counter = 0
bank.innerText=bankQ[counter]

next.addEventListener("click", function(event){
    event.preventDefault()
    if(counter < 9){
        counter = counter + 1
    }
    bank.innerText=bankQ[counter]
})

previous.addEventListener("click", function(event){
    event.preventDefault()
    if(counter > 0 ){
        counter = counter - 1
    }
    bank.innerText=bankQ[counter]
})



// Q. 5



function index(){
    var index = Math.floor(Math.random() * 7)
    return index
}


function pcolorchanger(){
    var colors = ["red", "blue", "green", "yellow", "purple", "orange", "cyan"];

    document.getElementById("one").style.color=colors[index()]
    document.getElementById("two").style.color=colors[index()]
    document.getElementById("three").style.color=colors[index()]

}

pcolorchanger()

// Q. 6

// d and f

function namechecker(value) {
    return value.trim().length > 3;
}

var usr = document.getElementById('fullname');
var err = document.getElementById("inv");
var usrnameval;
usr.addEventListener("blur", function() {
    if (!namechecker(usr.value)) {
        err.style.display = "inline";
        usr.style.display = "inline"
        usr.style.backgroundColor = "gray"
        usr.focus();
        usr.select();
    } else {
        err.style.display = "none";
        usr.style.backgroundColor = "white"
        usrnameval = true
    }
});



// e

var pw = document.getElementById("passwd")
var rpw = document.getElementById("re-passwd")
var perr = document.getElementById("rpw")

var pwval;

rpw.addEventListener("blur", function(){
    if (pw.value === '') {
        perr.innerText = "Password is required";
        perr.style.display = "inline";
    } else if (rpw.value !== pw.value) {
        perr.innerText = "Passwords do not match";
        perr.style.display = "inline";
    } else {
        perr.style.display = "none";
        pwval = true
    }
});

// g 


/*
the required validation in HTML will prevent from submit
the Js validation will not prevent it,
unless use event.preventDefault(),
then validate the input and submit after that
*/


// 7

var sub = document.getElementById("submit-reg")

sub.addEventListener("click", function(event){
    if(usrnameval !== true || pwval !== true){
        event.preventDefault()
        alert("Please check your inputs first")
    }
})


// Q. 8

// The code is embedded in the form element's tags


// Q. 9 
// The solution is in separated HTML and JS files