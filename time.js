

var dest = new Date("oct 21 2030 10:58:00").getTime();

var x = setInterval( function() { 

var currentDate = new Date().getTime();


var diff = dest - currentDate ;

var days= Math.floor(diff/ (1000 * 60 * 60 * 24));

console.log(days);

var hours = Math.floor((diff % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));

console.log(hours);

var minutes = Math.floor((diff % (1000 * 60* 60) )/(1000 * 60));

console.log(minutes);

var seconds = Math.floor( (diff % (1000 * 60))/1000);

console.log(seconds);

 document.getElementById("countdown").innerHTML = days+ "Days:" +hours+"hrs:"+minutes+"m:"+seconds+"s";






document.getElementById("aftercountdown").style.animationPlayState="paused";



if( days < 0 )

{
    document.getElementById("aftercountdown").innerHTML = "Novato <br> Fiesta '19 ";

    
    var manip = document.getElementById("countdown").style;
   


   
    
    setTimeout(function()

    {
         document.getElementById("myaudio2").play();

        document.getElementById("headerline").style.display="none";
        document.getElementById("headerline1").style.display="none";
 

        
        document.getElementById("aftercountdown").style.animationPlayState="running";

     

           manip.display="none";

         
             
         
           
           

            

    },10)
   
   
}

  



},1000 );


