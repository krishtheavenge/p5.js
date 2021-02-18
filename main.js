function setup(){
 var  canvas = createCanvas(640,480);
 canvas.position(150,150);
 video=createCapture(VIDEO);
 video.hide();

}

function draw(){
    image(video,230,150,220,200);


    fill(0,100,128);
    stroke(0,100,128);
    rect(90,40,460,20);

    rect(90,420,460,20);
    rect(90,40,20,400);
    rect(550,40,20,400);
}
