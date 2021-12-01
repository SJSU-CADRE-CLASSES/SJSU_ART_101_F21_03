let video;
let poseNet;
let pose;

function setup (){
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0){
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}



function modelLoaded(){
  console.log('poseNet ready');
}

function draw(){
  image(video, 0, 0);


  if (pose){
let eyeR = pose.rightEye;
let eyeL = pose.leftEye;
let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);


  fill (255,255,255);
  ellipse(pose.leftEye.x, pose.leftEye.y, d);
  ellipse(pose.rightEye.x, pose.rightEye.y, d);

  fill(255,50,90);
  circle(pose.nose.x, pose.nose.y,d);

  fill(255,70,90);
 square(pose.leftShoulder.x, pose.leftShoulder.y, 70);
  square(pose.rightShoulder.x, pose.rightShoulder.y, 70);

  for (let i = 0; i < pose.keypoints.length; i ++){
    let x = pose.keypoints[i]. position.x;
    let y = pose.keypoints[i].position.y;
    fill(200,255,0);
    circle(x,y,16,16);
  }
for (let i = 0; i < skeleton.length; i++){
  let a = skeleton [i][0];
  let b = skeleton [i][1];
  strokeWeight(2);
  stroke(255);
  line(a.position.x, a.position.y,b.position.x,b.position.y);
}

}
}