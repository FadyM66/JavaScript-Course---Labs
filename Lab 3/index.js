


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

// The script is internal within the other html file



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








