/*global $*/
/*eslint-env browser*/
/*eslint "no-console": "off" */
var GoT_Array = [{"house": "Stark", "src":"../images/stark.jpg"}, {"house":"Baratheon", src: "../images/baratheon.jpg"}, {"house":"Lannister", "src":"../images/lannister.jpg"}, {"house": "Greyjoy", "src":"../images/greyjoy.jpg"}, 
{"house":"Tyrell", "src":"../images/tyrell.jpg"}, {"house":"Martell", "src": "../images/martell.jpg"}];
 var clonedArray = GoT_Array.slice(0);//returns a copy of the array, starting from the stated index
var utility_array= GoT_Array;
var count = 0
var amount = 0;

function getPlayersNumber() {
    //amount is equal to target id, which is equal to the number of houses in play
    amount = event.target.id;
    console.log("AMOUNT START: " + amount);
    clonedArray.splice(amount, amount);
    $("#start").hide();
    $("#choice").show();
    return amount, clonedArray;
}


function getPlayers () {
    $("#titleContainer").hide();
    count++
    var button = $("#go");
//var canvas = document.getElementById('can');
//var context = canvas.getContext("2d");
    if (clonedArray.length == 1 && count == amount  ){
        //make the last remaining element appear AND make cloned array equal to initial array again; make count back to 0;
        $("#body").css("background-image", "url(" + clonedArray[0].src + ")" );
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
         $("#body").css("background-image", "url(" + clonedArray[ri].src + ")" );
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

$(".p_button").click(function(){
    getPlayersNumber();
})

$("#go").click(function(){
    getPlayers();
})


console.log(clonedArray);