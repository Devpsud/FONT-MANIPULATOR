x_nose = 0;
y_nose = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("Model Is Loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        x_nose = results[0].pose.nose.x;
        y_nose = results[0].pose.nose.y;
        console.log("X = "+x_nose+" Y = "+y_nose);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        console.log("rightWrist = "+rightWristX+" leftWrist = "+leftWristX);
        difference = floor(leftWristX - rightWristX);
        console.log(difference);
document.getElementById("square_sides").innerHTML = "Width and height of the text is "+difference+"px";
    }
}

function draw() {
    background("#969A97");
    fill("#F90093");
    stroke("#F90093");
    text(x_nose,y_nose,difference);
}


