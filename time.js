

var dest = new Date("oct 6,2019 17:59:00").getTime();

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

      

    //    document.getElementById("Forjs").style.display="none";
       
       

           manip.display="none";

         
             
          
           
           

            

    },10)
   
   
}

  



},1000 );




  
// window.onload=function(){
//     document.getElementById("myaudio").play();
// }
