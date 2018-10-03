/* Samantha Ho
Section E 
sch1@andrew.cmu.edu
Lab 06*/

var xarray = [];
var yarray = [];
var move = 2;
var val0 = 0.30;
var val1 = 0.45;
var val2 = 0.15;
var val3 = 0.10;


function setup() {
	createCanvas(400 , 400);
    
	}

function draw() {
    background(15,55,50);
    fill(200,220,220);
    ellipse(200,200,200,200);
    arc(200, 200, 200, 200, 0, PI + val0*QUARTER_PI);
    /*
    for(var i = 0; i < xarray.length; i++){
        var x = xarray[i];
        var y = yarray [i];
        strokeWeight(i);
        line (x,y + move, xarray[i-2], yarray[i-2] +move);
	 if(xarray.length >20 && yarray.length>20){
        xarray.shift();
         yarray.shift();
    }
     if(yarray.length < height){
         move +=.16;
     }

    }*/
   
}

function mouseDragged(){
    xarray.push(mouseX);
    yarray.push(mouseY);
    
    move = 0;
    
}

function mousePressed(){
    xarray = [];
    yarray = [];
}