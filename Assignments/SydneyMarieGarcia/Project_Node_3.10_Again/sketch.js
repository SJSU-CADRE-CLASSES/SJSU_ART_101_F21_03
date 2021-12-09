let trailvalue;
let switchvalue;
let noiseOffset = 0;
let strokevalue = 5;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background('#B00B69');
    trailvalue = 30;
    switchvalue = true;
}

function draw(){
     if (switchvalue===false){
            trailvalue = 5;
     } else{
            trailvalue = 20;
     }
    strokeWeight(strokevalue);
    //noiseOffset += 0.05;
    //strokevalue = noise(noiseOffset)*10;
    strokevalue = 5;
	background(176, 11, 105, trailvalue);
	stroke(map(mouseX, 0, 600, 0, 255, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
	line(mouseX, mouseY, pmouseX, pmouseY);
    
    if(mouseIsPressed){

      push();
      noiseOffset += 0.3;
      strokevalue = noise(noiseOffset)*100;
      
	  stroke(map(mouseX, 0, 600, 0, 255, true));
      //stroke(map(mouseX, 0, 600, 0, 255, true),map(mouseX, 0, 600, 0, 255, true),map(mouseX, 0, 600, 0, 255, true));
      line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
	  line(mouseX, mouseY, pmouseX, pmouseY);
      pop();
    } 

}

function keyTyped(){
	if(key === 's'){
		saveCanvas('fileName','jpg')
    } else if (key==='c'){
        clear();
    } else if (key==='a'){
        if (switchvalue==true){
            switchvalue = false;
        } else if (switchvalue==false){
            switchvalue = true;
        } 
         
    }
  return false;
  
}