// First Question

function mathcalc() {

    var expression = prompt("Please enter a math expression (e.g., 3+4*5/10*8):")

    try
    {
        // var result = new Function('return ' + expression)();
        var result = eval(expression);
        console.log(result);
        alert(`the result is: ${result}`);       

    }
    catch(ex)
    {
        alert("Invalid input\n",ex.message)
    }    
}


// Second Question

function charCounter(){
    var expression = prompt("Please enter a text..")    
    counter = 0
    for(var i=0; i<expression.length; i++){
        if(expression[i] === 'A'){
            counter ++
        }
    }
    console.log(counter)
    alert("Number of A in your text is " + counter)
}


// Third Question

function jsTips(){
    var arr = [
        "Use 'const' for variables that should not be reassigned, 'let' for variables whose values will change, and 'var' only when necessary.",
        "Always use strict comparison operators (=== and !==) to avoid unexpected type coercion issues.",
        "Avoid using global variables. They can lead to unintended side effects and make code harder to maintain.",
        "Use descriptive variable and function names to improve code readability and maintainability.",
        "Use arrow functions (=>) for concise and clear function expressions, especially for callbacks and shorter functions.",
        "Understand and leverage JavaScript closures for maintaining state and creating private variables.",
        "Learn about asynchronous programming in JavaScript using Promises, async/await, and callback functions.",
        "Use the 'map', 'filter', and 'reduce' array methods for functional programming style and cleaner code.",
        "Be cautious with mutable operations on arrays and objects. Consider using immutability techniques to prevent unintended side effects.",
        "Use console.log() for debugging and console methods like console.error() and console.warn() for error handling and warnings."
    ]

    var randomNum = Math.floor(Math.random(0,0) * 11)
    alert(arr[randomNum])   
}


// Fourth Question

function Mylocaldate(){
    var d = new Date()
    alert(d.toLocaleString())
}


// Fifth Question

function HandleFunc(){
    try
    {
        alertt("Error")
    }
    catch(ex)
    {
        alert("An Error has been raised\n" + ex.message)
    }
    finally
    {
        alert("This is a Finally Statement..\nJust in case you want to check it")
    }
}

// 6th question

function ShowDate(){
    var udate = prompt("enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999")

    if(udate.length === 10 && udate.charAt(2) === '-' && udate.charAt(5) === '-'){
        var day = parseInt(udate.substring(0,2))
        var month = parseInt(udate.substring(3,5)) -1
        var year = parseInt(udate.substring(6,10))

        var fdate = new Date(year, month, day)
        alert(`The new formated String Date is ${fdate.toDateString()}`)
    }
    else{
        alert("Your input format is not CORRECT")
    }
}



// 7th Question

function numCounter(){
    var arr = prompt("Please enter some numbers to make an array \nmake sure that numbers are separated using space").split(' ')
    var num = prompt("Enter a number to search for..")

    // var array = []

    // for(var i=0; i<arr.length; i++){
    //     array[i] = +arr[i]
    // }

    console.log(arr)

    counter = 0
    
    for(var i=0; i<arr.length; i++){
        if(num == arr[i]){
            counter ++;
        }
    }    

    alert(`Number of ${num} Occurance is ` + counter)
}


// 8th Question

function arrElemRemover(){
    var x = prompt("Enter an string array")
    var char = prompt("Enter a character you want to remove: ")

    
    for(var i=0; i<x.length; i++){
        x = x.replace(char, '')
    }

    alert(x)
}


// 9th Question

function maxoccur(){
    var arr = prompt("Enter some numbers to make array and space between them: ").split(" ")
    var xarr = []

    for(var i=0; i<arr.length; i++){
        xarr[i] = +arr[i]
    }
    
    alert("Max num is " + Math.max(...xarr))
}