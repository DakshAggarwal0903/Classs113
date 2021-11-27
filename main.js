function setup(){
   canvas = createCanvas(640,480);
   canvas.position(110,250);
   y = createCapture(VIDEO);
   y.hide();
   z = "";
}
function draw(){
image(y,0,0,640,480);
tint(z);
}
function ApplyFilter(){
    z = document.getElementById("input_color").value;
}
function take_snapshot(){
    save('snapshot.jpg');
}