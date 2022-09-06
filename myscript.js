function GetValue()
{
    var myarray= new Array("PYG","THE LONG HAUL","DEVITTS","HOGANS","GROGANS","THE CAMDEN","NO NAME BAR","CASSIDYS","MARY'S BAR",
    "The Gravediggers","The Cobblestone","Whelan's","P.Mac's","Flannery's","Market Bar","The Bernard Shaw","Jimmy Rabbitte's");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}



