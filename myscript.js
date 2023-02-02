function GetValue()
{
    var myarray= new Array(    
    "PYG",
    "THE LONG HAUL",
    "DEVITTS",
    "HOGANS",
    "GROGANS",
    "THE CAMDEN",
    "NO NAME BAR",
    "CASSIDYS",
    "MARY'S BAR",
    "THE GRAVEDIGGERS",
    "THECOBBLESTONE",
    "WHELAN'S",
    "P.MAC’S",
    "FLANNERY'S",
    "DOYLE'S",
    "MARKET BAR",
    "THE BERNARD SHAW",
    "JIMMY RABBITTES");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}

$("a.btn").mousedown(function(){
    $(this).addClass("pressed");
});

$("a.btn").mouseup(function(){
    $(this).removeClass("pressed");
});



$("a.btn").on("tap",function(){
    $(this).removeClass("pressed");
});

$("a.btn").mouseout(function(){
    $(this).removeClass("pressed");
});

