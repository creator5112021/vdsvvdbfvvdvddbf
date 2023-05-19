LwristX = 0
RwristX = 0
Difference = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(50,150);

    canvas = createCanvas(550,500);
    canvas.position(800,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("rgb(224, 255, 176)")
    textSize(Difference)
    fill("#46916f")
    text('Shivansh',50,400 )
}

function modelLoaded() {
    console.log('Posenet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        LwristX = results[0].pose.leftWrist.x 
        RwristX = results[0].pose.righttWrist.x
        Difference = floor(LwristX - RwristX)
    }
}