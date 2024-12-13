var redColor = 255;
var greenColor = 204;
var blueColor = 0;

var x = 100;
var y = 200;
var diameter = 90;
var movement = 13;

var size = 30;
var count = 0;
var sizeDirection = 2;

function setup()
 { createCanvas (500, 500);
 movement = floor(random() * 10) + 1;

}


function draw()
 { background(100); 
    textSize(20)
    text ("By Echo", 400,450); 
    strokeWeight(0.5);

//This is the title of the drawing 

 textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 18)
    {
        sizeDirection *=-1;
        count = 0;
    }
text ("Liliac Flower", 50,50);


    
//I intended for only one circle to be purple but I like it either way

   fill(175, 100, 220);
   circle (240,200,50);

//the moving circle is meant to be a sun

   circle(x, y, diameter);
   if (x < 500)
   {
       x++;
   

   
/*
 This circle didnt bounce back as planned 
   It also interferred with the sun unintentionally
 Its only purpose was to bounce back and forth
   
*/

circle(x,y, 10);
if(x <= 500 || x >= 0) { 
    movement *= -1;

 }
  x += movement;
}



//Down below is just the rest of the shapes coding

   circle (240, 500,300);
   line (240, 230, 240, 350);
   square (155, 130, 60);
   square (251, 118, 60);
   square (255, 220, 60);
   square (162, 220, 60);

}