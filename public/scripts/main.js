/*global $*/
/*eslint-env browser*/
/*eslint "no-console": "off" */
var GoT_Array = [
    {"house": "Stark", "src":"../images/stark.jpg", color: "rgb(48, 48, 48)"}, 
    {"house":"Baratheon", src: "../images/baratheon.jpg", color: "rgb(38, 37, 43)"}, 
    {"house":"Lannister", "src":"../images/lannister.jpg", color: "rgb(249, 189, 64)"}, 
    {"house": "Greyjoy", "src":"../images/greyjoy.jpg", color: "rgb(247, 189, 54)"}, 
    {"house":"Tyrell", "src":"../images/tyrell.jpg", color: "rgb(224, 199, 0)"}, 
    {"house":"Martell", "src": "../images/martell.jpg", color: "rgb(147, 32, 29)"}
];
 
var clonedArray = GoT_Array.slice(0);//returns a copy of the array, starting from the stated index
var utility_array= GoT_Array;
var count = 0
var amount = 0;

function getPlayersNumber() {
    //amount is equal to target id, which is equal to the number of houses in play
    amount = event.target.id;
    console.log("AMOUNT START: " + amount);
    clonedArray.splice(amount, amount);
//    $("#start").hide();
    $("#flexContainer").hide();
    $("#go_container").show();
//    $("#choice").show();
//    $("#titler").show();
//    $("#choice").toggleClass("flex");
    return amount, clonedArray;
}


function showIt(){
    console.log("show");
    $("#choiceContainer").toggleClass("hidden");
    $("#choiceContainer").toggleClass("shown");
    if($("#choiceContainer").css("display", "none")){
        console.log("DISPLAY NONE")
    }
    if($("#choiceContainer").hasClass("hidden")){
        console.log("HIDDEN")
    }
    $("#start").hide();

}

function getPlayers () {
    $("#titleContainer").hide();
    count++
    var button = $("#next");
//var canvas = document.getElementById('can');
//var context = canvas.getContext("2d");
    if (clonedArray.length == 1 && count == amount  ){
        //make the last remaining element appear AND make cloned array equal to initial array again; make count back to 0;
        
        visualizeHouse(0);
//        $("#body").css("background-image", "url(" + clonedArray[0].src + ")" );
//        $("#house_container").css("color", clonedArray[0].color);
//        $("#house_name").html(clonedArray[0].house);
        console.log(clonedArray[0].src)
        console.log("LAST HOUSE:" +  clonedArray[0]);
        count = 0;
        clonedArray = GoT_Array.slice(0);
        //adjust array to desired length
        clonedArray.splice(amount, amount);
        console.log("LOOK NEW CLONEDARRAY: " + clonedArray);
        button.html("Retry")
    }
    
    else{
         console.log(clonedArray);
         var ri = Math.floor(Math.random()*clonedArray.length);
         console.log(ri);
         console.log(clonedArray[ri]);
        
        visualizeHouse(ri);
//         $("#body").css("background-image", "url(" + clonedArray[ri].src + ")" );
//         $("#house_container").css("color", clonedArray[ri].color);
//         $("#house_name").html(clonedArray[ri].house);
         console.log($("#body").prop("background-image"))
         clonedArray.splice(ri, 1);
         button.html("next"); 
         console.log("NEW AMOUNT: " + amount); 
         console.log(clonedArray)
        }


//    alert(clonedArray[ri]);
    console.log(clonedArray);
    console.log(GoT_Array);
//    count = count -1;
    return clonedArray;
}

function visualizeHouse (n){
    $("#body").css("background-image", "url(" + clonedArray[n].src + ")" );
    $("#house_container").css("color", clonedArray[n].color);
    $("#house_name").html(clonedArray[n].house);
}

function goBack (){
    //with parameter "true", the page reloads from server
    //with parameter "false" the page reloads from brower's cache
    location.reload(true);
}

$(".p_button").click(function(){
    getPlayersNumber();
})

$("#go").click(function(){
    showIt();
    getPlayers();
})

$("#next").click(function(){
    getPlayers();
})

$("#back").click(function(){
    goBack();
})


console.log(clonedArray);