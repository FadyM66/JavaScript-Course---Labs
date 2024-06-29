// Q. 1

var txtName = document.getElementById("txtName")
var pass = document.getElementById("passwd")
var login = document.getElementById('login')


window.onload = function(){
    var usr = localStorage.getItem('Username')
    var pw = localStorage.getItem('Password')
    txtName.value = usr
    pass.value = pass
}

login.addEventListener("click", function(){
    
    localStorage.setItem("Username", txtName.value)
    localStorage.setItem("Password", pass.value)
})




// SessionStorage could not be used because the saved data will be
// lost once the tab is closed, while LocalStorage doesn't do that.

// LocalStorage stays for the same window or tab origin even if the tab is closed

// SessionStorage stores the data only for the session being used, once
// the tab or the browser is closed, data will be lost

// Multiple tabs of the same website can access the same LocalStorage
// With SessionStorage, each tab has its own sessionstorage.


// Q. 2


var usr1 = document.getElementById("txtName1")
var pw1 = document.getElementById("passwd1")
var rem = document.getElementById("rem")
var login1 = document.getElementById("login1")

login1.addEventListener("click", function(){    

        if(rem.checked){

            localStorage.setItem("Fullname1", usr1.value)
            localStorage.setItem("Password1", pw1.value)

            window.onload = function(){

                var usr2 = localStorage.getItem('Fullname1')
                var pw2 = localStorage.getItem('Password1')

                txtName.value = usr2
                pass.value = pw2
            }        
        }
        else{
            localStorage.removeItem('Fullname1')
            localStorage.removeItem('Password1')
        }    
})



// Q. 3

var obj = {
            "ID": 1,
            "name": "John Doe",
            "Age": 20,
            "Address": {
            "street": "123 Elm Street",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345"
            },
            "Skills": ["Programming", "Data Analysis", "Teamwork"],
            "IsLeader": false
}


var JSONstr = JSON.stringify(obj)

// Print JSON String
console.log(JSONstr)

// Back to and Print the JSON Object
console.log(JSON.parse(JSONstr))


// Q. 4


var students = [
    {
      "ID": 1,
      "name": "John Doe",
      "Age": 20,
      "Address": {
        "street": "123 Elm Street",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345"
      },
      "Skills": ["Programming", "Data Analysis", "Teamwork"],
      "IsLeader": false
    },
    {
      "ID": 2,
      "name": "Jane Smith",
      "Age": 22,
      "Address": null,
      "Skills": ["Design", "Marketing", "Communication"],
      "IsLeader": true
    },
    {
      "ID": 3,
      "name": "Michael Johnson",
      "Age": 21,
      "Address": {
        "street": "456 Oak Avenue",
        "city": "Sometown",
        "state": "NY",
        "zip": "54321"
      },
      "Skills": ["Problem Solving", "Leadership", "Time Management"],
      "IsLeader": false
    }
]


students.forEach(student => {
    console.log(student.name)
    console.log(student.Skills)
    console.log(student.Address)
})
  

// XML composed of tag and attributes as in HTML.
// Json composed of key-value pairs.


// Q. 5


var id = document.getElementById("id")
id.addEventListener("input", function()
{
    var url = "https://reqres.in/api/users/" + id.value.trim()
    function loadData() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var convertedData = JSON.parse(this.responseText);
            var pf = document.getElementById("p-f")
            var pl = document.getElementById("p-l")
            var pi = document.getElementById("p-i")
            pf.innerText = convertedData.data.first_name
            pl.innerText = convertedData.data.last_name
            pi.setAttribute("src", convertedData.data.avatar) 
        }
    };

    
    xhttp.open("GET",url,true);
    xhttp.send();
    }
    if(id.value !== ''){
    loadData()
    }
}
)


// Q. 5 - b 

var xhr = new XMLHttpRequest();

        
xhr.onload = function() {
if (xhr.status >= 200 && xhr.status < 300) {
    
    var response = JSON.parse(xhr.responseText);
    var users = response.data; 
    var dropdown = document.getElementById('userDropdown');

    
    users.forEach(function(user) {
        var option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.first_name + ' ' + user.last_name;
        dropdown.appendChild(option);
    });

    
    dropdown.addEventListener('change', function() {
        var selectedUserId = this.value;
        var userDataDiv = document.getElementById('userData');

        
        var selectedUser = users.find(function(user) {
            return user.id == selectedUserId;
        });

        
        if (selectedUser) {
            userDataDiv.innerHTML = `
                <h2>User Information</h2>
                <p>Name: ${selectedUser.first_name} ${selectedUser.last_name}</p>
                <p>Email: ${selectedUser.email}</p>
                <img src="${selectedUser.avatar}">
            `;
        } else {
            userDataDiv.innerHTML = '';
        }
    });
} else{
    console.log('Error');
}
};

xhr.open('GET', 'https://reqres.in/api/users', true);
xhr.send();




// Q. 6


function validation() {
    
    var name = prompt("Enter your full name:");
    var email = prompt("Enter your email address:");

    
    var namepattern = /^[A-Za-z]{3,}(?: [A-Za-z]{3,})*$/;
    var epattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$/;

    
    if (!namepattern.test(name)) {
        alert("Name is invalid. It should contain only alphabetic characters and spaces, with each word having at least 3 letters.");
        return;
    }

   
    if (!epattern.test(email)) {
        alert("Email is invalid. It must be a valid .eg domain email address (e.g., name@domain.com.eg).");
        return;
    }

  
    alert("Inputs are valid!\nFull Name: " + name + "\nEmail: " + email);
}