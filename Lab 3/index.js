
//RegExp

// is an object that describes a pattern
// used to perform pattern matching - seach and replace

// literal RegExp

// var exp = /pattern/modifiers

// RegExp Object

// var exp2 = new RegExp("pattern", "modifiers")

// RegExp is composed of 

// 1. Modifires

//      i >> ignore case
//      g >> global search
//      m >> multiline

// i example
// var str = "Visit Google and visit google again"
// var pattern1 = /Google/i
// var result = str.match(pattern1)
// console.log(result)

// g example
// var str = "Visit Google and visit google again"
// var pattern1 = /google/gi
// var result = str.match(pattern1)
// console.log(result)

// m example
// var str = "\nVisit Google and \nvisit \ngoogle again"
// var pattern1 = /^Google/gim
// var result = str.match(pattern1)
// console.log(result)



//      Functions

//      test
//      var reg = /G.*e/
//      var result = reg.test("Google")
//      console.log(result)

//      exec
//      var reg = /G.*e/
//      var result = reg.exec("Google Google")
//      console.log(result)

//      search
//      var str = "Is this is it?"
//      var reg = /is/i
//      var result = str.search(reg)
//      console.log(result)



// 2. Pattern

// var str = "Is this all there is ?"
// var pattern = /[hs]/g
// var result = str.match(pattern)
// console.log(result)

// var str = "1 5 33 7 2 4 1"
// var pattern = /[1-4]/
// var result = str.match(pattern)
// console.log(result)


// var str = "re , green, red , gren, red, gr, ret"
// var pattern = /(red|green)/g
// var result = str.match(pattern)
// console.log(result)

// var str = "Give 100%"
// var pattern = /\d/g
// var result = str.match(pattern)
// console.log(result)

// var pattern = /^The end$/

// /abc*/ start with a then b, and uncountable c after them

// /abc+/ start with a then b, and at least one c

// /abc?/ start with a then b, and 0 or 1 c

// /abc{2,} start with a then b, and at least 2 c or more

// /abc{2,4} start with a then b, and at least 2 c up to 4

// /a(bc)*/ start with a and the pattern bc comes uncountable

// /a(bc){2,4} start with a then the pattern bc start from two times up to 4 times

// var pattern = /^[A-Za-z0-9]$/

// Q. Username must be at least 4 charaacters and 
// it must be max 8 char, and contains only numbers and char
// and may contain underscore

// var pattern = /^[A-Za-z0-9_]{4,8}$/

// BOM
// Window Object 'global object - has all the other objects'

// var x = 10
// console.log(window.x)


// Timing functions

// function printMessage()
// {
//     console.log("Hello")
// }

// var timeout = setTimeout(printMessage, 4000)

// clearTimeout(timeout)

// var interval = setInterval(printMessage, 2000)

// clearInterval(interval)


// var interval 

// function startClock()
// {
//     interval = setInterval(function(){
//     var date = new Date()
//     document.getElementById('Clock').innerHTML=date.toLocaleTimeString()
//     }, 2000)
// }

// function stopClock(){
//     clearInterval(interval)
// }



// function openwin(){
// var url = "https://www.google.com"
// open(url, "_blank", "width: 500px; height: 600px")
// }

// function scrollPageBy(){
//     scrollBy(100, 200)
// }

// function scrollTo(){
//     scrollTo(100, 200)
// }


// console.log(location.href)
// console.log(location.protocol)
// console.log(location.search)
// console.log(location.pathname)
// console.log(location.hostname)


//  >>>>   URL SEARCH PARAMS "Google It"




// assign vs replace

// history.go(1)
// navigator

























// Q. 1

function startClock()
{
    interval = setInterval(function(){
    var date = new Date()
    document.getElementById('Clock').innerHTML=date.toLocaleTimeString()
    }, 1000)
}

function stopClock(){
    clearInterval(interval)
}


// Q. 2

function Linking(){    

    function openLink(){
        var page = window.open("", '_blank', "width: 500px; height:600px")
        page.document.write(`
            <style>
                a{
                    cursor: pointer;
                }
            </style>
            <script>
                function Exit(){
                    window.close()
                }
            </script>
            <p>This is a paragraph</p>
            <a onclick="Exit()">Exit</a>
            `)        
    }

    setTimeout(openLink, 3000)
}












// Q. 3

// function Redirect(){
//     window.open("", "_blank", "width:300px;height:300px")
// }

// function formAction(){
//     // var redirc = window.open("", '_blank')

//     var url = new URL(window.location.href);
//     var username = url.searchParams.get("username");
//     document.write('<h1>Welcome '+ username + '</h1>')


//     // page.document.write(`
//         // <h1> Hello ${username} </h1>
//         // `)
// }

// function formAction(){
//     var url = new URL(window.location.href);
//     var username = url.searchParams.get("username")[];
//     document.write('<h1>Welcome '+ username + '</h1>')

// }


















// Q. 4


var interval;

function autoScroll(){

    interval = setInterval(function scrollPageBy(){
        scrollBy(0, 100)}, 1000)
}

function stopScroller(){
    clearInterval(interval)
}



// Q. 5

function emailChecker(){

    var email = prompt("Please enter a valid E-mail")
    var str = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(str.test(email)){
        alert("Your E-mail is VALID")
    }
    else
    {
        alert("The email is not valid")
    }

}


function phoneChecker(){

    var phone = prompt("Please enter a valid phone number")
    var str = /^0\d{10}$/
    if(str.test(phone)){
        alert("Your phone NUMBER is VALID")
    }
    else
    {
        alert("The phone number is not valid")
    }

}








