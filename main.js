function preload(){
    img = loadImage('dog_cat.jpg');
}
var audio = new Audio('alarm_sound.mp3');
var img="";
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function modelLoaded(){
    console.log("model is loaded");
    variable1=true;
}
variable1="";
 array =[];
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    array = results;
}

function draw(){
    image(video,0,0,640,420);
    objectDetector.detect(video,gotResults);
    for(i=0;i<array.length;i++)
    if(person_detected="true")
    
{
    document.getElementById("h3_2").innerHTML = "baby detected";
    alarm_sound.pause();
   }
   else {
    document.getElementById("h3_2").innerHTML = "baby not detected";
    alarm_sound.play();
   }

  if(array.length>0){
    document.getElementById("h3_2").innerHTML = "baby not detected";
    alarm_sound.play();
  }
    
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("h3").innerHTML="Status:Detecting objects";
    }



