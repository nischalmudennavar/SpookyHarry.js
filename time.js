

var dest = new Date("oct 6,2019 10:58:00").getTime();

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

      function(){
          track.applyConstraints({
            advanced: [{torch: true}]
          });
        }

    //    document.getElementById("Forjs").style.display="none";
       
       

           manip.display="none";

         
             
          const SUPPORTS_MEDIA_DEVICES = 'mediaDevices' in navigator;

if (SUPPORTS_MEDIA_DEVICES) {
  //Get the environment camera (usually the second one)
  navigator.mediaDevices.enumerateDevices().then(devices => {
  
    const cameras = devices.filter((device) => device.kind === 'videoinput');

    if (cameras.length === 0) {
      throw 'No camera found on this device.';
    }
    const camera = cameras[cameras.length - 1];

    // Create stream and get video track
    navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: camera.deviceId,
        facingMode: ['user', 'environment'],
        height: {ideal: 1080},
        width: {ideal: 1920}
      }
    }).then(stream => {
      const track = stream.getVideoTracks()[0];

      //Create image capture object and get camera capabilities
      const imageCapture = new ImageCapture(track)
      const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {

        //todo: check if camera has a torch

        //let there be light!
        
      });
    });
  });
  
  //The light will be on as long the track exists
  
  
}

  
// window.onload=function(){
//     document.getElementById("myaudio").play();
// }

           
           

            

    },10)
   
   
}

  



},1000 );


