// page loads, game is on

$(document).ready(function(){ 
    var targetNumber = Math.floor(Math.random() * 101); // a random number is generated
    $("#targetNumber").text(targetNumber);
    console.log(targetNumber);
})


