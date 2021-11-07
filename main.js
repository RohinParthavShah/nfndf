noseX= 0;
noseY= 0;
difference = 0;
leftWristX= 0;
rightWristY= 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);


    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}


function draw(){
    background('#FF0000');
 
    textSize(difference);
    fill('#FFC0CB');
    text('Peter',50,400);
    
    
}

function modelLoaded(){
    console.log("PoseNet is Intialized");
}



function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        
    
        leftWristX =  results[0].pose.leftWrist.x;
        rightWristX =  results[0].pose.rightWrist.x;
        difference = floor( leftWristX - rightWristX );
        console.log("  leftWristX=  " +  leftWristX +"   rightWristX=  " +  rightWristX + "  difference=  " + difference );
        
    }
   
}
