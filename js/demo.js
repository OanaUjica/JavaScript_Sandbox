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
    //var regex = /[a-xA-X]00/;                                          //checking for this pattern
    var regex = /[^a-z]gmail]gmail/;
    //regx = new RegExp("E00","i");

    if (regex.test(username)){
        alert("Valid username");
    }
    else{
        //alert("Invalid username");
        document.getElementById("labelUser").style.visibility="visible";
    }

}




function validateMobileNumber(){
    var text = document.getElementById("mobile").value;

    var regex = /^[5-9][a-z]{8}[0]$/;

    if (regex.test(text)){
        document.getElementById("labelText").innerHTML="Valid";
        document.getElementById("labelText").style.visibility="visible";
        document.getElementById("labelText").style.color="green";
    }
    else{
        document.getElementById("labelText").innerHTML="InValid";
        document.getElementById("labelText").style.visibility="visible";        
        document.getElementById("labelText").style.color="red";
    }
}



function validateEmail(){
    var text = document.getElementById("email").value;

    var regex = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

    if (regex.test(text)){
        document.getElementById("labelText").innerHTML="Valid";
        document.getElementById("labelText").style.visibility="visible";
        document.getElementById("labelText").style.color="green";
    }
    else{
        document.getElementById("labelText").innerHTML="InValid";
        document.getElementById("labelText").style.visibility="visible";        
        document.getElementById("labelText").style.color="red";
    }
}



function addValue(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;

    document.getElementById("op").innerHTML = "Result = " + (a+b);
    console.log(a+b);
}


var ID = 0;
var seconds = 0;
function printMessage(){
    document.getElementById("op").innerHTML = seconds + " seconds";
    seconds++;
}


function start(){
    ID = window.setInterval(printMessage,1000);
}


function stop(){
    window.clearInterval(ID);
}




var opacity = 0;
var intervalID = 0;
function fadeOut(){
    intervalID = setInterval(hide,20);
}

function hide(){
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));

    if (opacity > 0){
        opacity = opacity - 0.1;
        img.style.opacity = opacity;
    }
    else{
        clearInterval(intervalID);
    }
}

function fadeIn(){
    intervalID = setInterval(show,200);
}

function show(){
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));

    if (opacity < 1){
        opacity = opacity + 0.1;
        img.style.opacity = opacity;
        console.log(opacity);
    }
    else{
        clearInterval(intervalID);
    }
}



var intervalIDZoomInZoomOut = 0;
var width = 100;
var difference = 2;
function increase(){
    clearInterval(intervalIDZoomInZoomOut);
    intervalIDZoomInZoomOut = setInterval(zoomIn,20);
}

function zoomIn(){
    if (width<200){
        width = width + difference;
        document.getElementById("img1").style.width = width;
        console.log(width);
    }
    else{
        clearInterval(intervalIDZoomInZoomOut);
    }
}

function decrease(){
    clearInterval(intervalIDZoomInZoomOut);
    intervalIDZoomInZoomOut  = setInterval(zoomOut,20);
}

function zoomOut(){
    if (width>100){
        width = width - difference;
        document.getElementById("img1").style.width = width;
        console.log(width);
    }
    else{
        clearInterval(intervalIDZoomInZoomOut);
    }
}


function fn1(){
    $("#heading1").fadeToggle(2000);
}

// $(document).ready(function () {

//     $("button").mouseenter(selectors);
//     $("button").mouseleave(selectors2);

//     $("btn2").hover(selectors,selectors2);

//     function selectors(){
//         // document.getElementById();
//         // $("h2").action();                            => action() => predefined functions in jQuery
//         //                                              => ("h2")   => the selector
//         //$("h2").fadeToggle();                           // getElementByTag
//         //$("#firstH2").fadeToggle(1500);                 // getElementById
//         //$(".myHeading").fadeToggle();                   // getElementByClass
//         //$("#firstDiv,p,li,.myDivs").fadeToggle(1000);
//         //$("p:first").fadeToggle(1500);                  
//         //$("li:even").fadeToggle(1500);                  //position 0 and 2 are selected
//         $("#firstDiv").fadeOut();
//     }

//     function selectors2(){
//         $("#firstDiv").fadeIn();
//     }
// });






{/* <script>
$(document).ready(function () {

    $("#btn1").click(function(){

        $("#firstDiv").slideUp("slow");
    });

    $("#btn2").click(function(){

        $("#firstDiv").slideDown();
    });

    $("#btn3").click(function(){

        $("#firstDiv").slideToggle();
    });
});
</script> */}



{/* <script>
$(document).ready(function() {

    $("#btn3").click(function(){

        $("#cube").animate({
            left:'150px',
            opacity:'1',
            width:'100px',
            height:'100px'
        },3000)
    });
});
</script> */}





{/* <script>
$(document).ready(function() {

    // callback
    function printMessage(){
        alert("Slide toggling done"); 
    }

    // $("#btntoggle").click(function() {
    //     $("#firstDiv").slideToggle(3000,printMessage);                
    // });



    // chaining
    $("#btntoggle").click(function() {

        $("#firstDiv").slideUp(2000).slideDown(2000).fadeOut(1000).fadeIn(3000);
    });  
    
});
</script> */}





{/* <script>

$(document).ready(function() {

    $("#btn1").click(function() {
        $("#p1").css("font-size", "25px");
        //$("#p1").attr("class", "p2class");
    });

    $("#btn2").click(function() {
        alert($("#p1").css("font-size"));
        //$("#p1").attr("class", "p2class");
    });
    
});

</script> */}






{/* <script>
// append() = inserts content at the end of the selected elements
// prepend() = inserts content at the beginning of the selected elements
// after() = inserts content after the selected elements
// before() = inserts content before the selected elements
$(document).ready(function() {

    $("#btn1").click(function() {

        $("#div1").append("<p>This is the 2nd paragraph in 1st division</p>");
    });

    $("#btn2").click(function() {

        $("#div1").after("<p>This is the 2nd paragraph in 1st division</p>");
    });

    $("#btn3").click(function() {

        $("#div1").prepend("<p>This is the 2nd paragraph in 1st division</p>");
    });

    
    $("#btn4").click(function() {

        $("#div1").before("<p>This is the 2nd paragraph in 1st division</p>");
    });

    $("#btn5").click(function() {

        $("#div1").remove();
    });

    $("#btn6").click(function() {

        $("#div1").empty("<p>This is the 2nd paragraph in 1st division</p>");
    });
});

</script> */}









{/* <script>

$(document).ready(function() {

    $("#btn1").click(function() {

        $("#div1").addClass("newdivclass newparaclass");
    });

    $("#btn2").click(function() {

        $("#div1").removeClass("newdivclass");
    });

    $("#btn3").click(function() {

        $("#div1").toggleClass("newdivclass");
    });

    $("#btn4").click(function() {
        $("#div1").css("font-size", "20px");
        //alert($("#div1").css("padding"));                
    });
});

</script> */}







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