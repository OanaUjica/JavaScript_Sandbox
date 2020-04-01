function buttonClick() {
    var str = document.getElementById("heading2").innerHTML;
    str = "Hello Oana!";
    alert(str);
}

function buttonClickAfterInput() {
    var str = document.getElementById("text1").value;
    alert("Value inside the text box is: " + str);
}


function submitResult() {
    var userName = document.getElementById("text1").value;
    var password = document.getElementById("text2").value;

    if (userName == "Oana Ujica" && password == "Oana1234!"){
        alert("The username and password matches!");
    }
    else{
        alert("Wrong input");
    }
}


function AlertWithTheSelectedRadioButton(){
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");

    if (rd1.checked == true){
        alert("The channel selected is: " + rd1.value);
    }
    else if (rd2.checked == true){
        alert("The channel selected is: " + rd2.value);
    }
    else{
        alert("No channel selected");
    }
}


function AlertWithTheSelectBox(){
    var select = document.getElementById("selectBox");
    alert(select.options[select.selectedIndex].value);
}


function changeStyling(){
    var paragraph = document.getElementsByTagName("p");

    for(var i=0; i<paragraph.length; i++){
        paragraph[i].style.fontSize = 22;
    }    
}


function changeStylingWithClass(){
    var paraClass = document.getElementsByClassName("myparagraph");

    for(var i=0; i<paraClass.length; i++){
        paraClass[i].style.color = "red";
    } 
}

function setNewImage(){
    document.getElementById("imgs").src = "imgs/JavaScriptTest.jpg";
}

function setOldImage(){
    document.getElementById("imgs").src = "imgs/Azore.jpg";
}

function validate(){
    var userName = document.getElementById("uname");
    var password = document.getElementById("pass");

    if(userName.value.trim() == ""){
        //alert("No blank username allowed!");
        userName.style.border = "solid 3px red";
        document.getElementById("labelUser").style.visibility="visible";
        return false;
    }
    else if(password.value.trim() == ""){
        //alert("No blank password allowed!");
        password.style.border = "solid 3px red";
        document.getElementById("labelPass").style.visibility="visible";
        return false;
    }
    else if(password.value.trim().length < 5){
        alert("Password too short!");
        return false;
    }
    else{
        true;
    }
}


function validateUserName(){
    var username = document.getElementById("uname").value;
    var regex = /E00/; //checking for this patern
    if (regex.test(username)){
        alert("Valid username");
    }
    else{
        alert("Invalid username");
        document.getElementById("labelUser").style.visibility="visible";
    }

}























var Car = {
    car_brand : "Tesla",
    car_model : "Model 3",
    price : 350000,

    teslaAutoPilot : function(){
        document.write("<h2>This car has Auto pilot</h2>");
    }
}

// object constructor
function Cars(car_brand, car_model, price) {
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.teslaAutoPilot = function() {
        document.write("<h2>This car ...</h2>");
    }
}

var c1 = new Cars("Tesla", "Model 3", 35000);
var c2 = new Cars("Ford", "Model P", 45000);
//c1.teslaAutoPilot();



// objects
//var str1 = "str";
//delete Car.price;
//Car.price = "550000";


//document.write("<h2>"+typeof(Car.price)+"</h2>");
//Car.teslaAutoPilot();

//alert(number);