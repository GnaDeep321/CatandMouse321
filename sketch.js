var cat,mouse,catImage,mouseImage;
var backgroundImage;
var catImg2,catImg4;
var mouseImg4;
function preload() {
  catImage=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
   mouseImage=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
   backgroundImage=loadImage("images/garden.png");
   catImg2=loadImage("images/cat2.png");
   catImg4=loadImage("images/cat4.png");
   mouseImg4=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(870,600,80,80);
    cat.addAnimation("Sitting",catImage);
    cat.scale=0.1;
    mouse=createSprite(200,600,80,80);
    mouse.addAnimation("Standing",mouseImage);
    mouse.scale=0.1;

}

function draw() {

    background(backgroundImage);

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catLastImage",catImg4);
       cat.changeAnimation("catLastImage");
       mouse.velocityX=0;
       mouse.addAnimation("mouseLImage",mouseImg4);
       mouse.changeAnimation("mouseLImage"); 

    }



    drawSprites();
}


function keyPressed(){
   
          if(keyCode===LEFT_ARROW){
            cat.velocityX=-5;
            cat.addAnimation("catRunning",catImg2);
            cat.changeAnimation("catRunning");
          }


}
