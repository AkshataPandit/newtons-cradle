const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const MouseConstraint=Matter.MouseConstraint;
const Mouse=Matter.Mouse;
const Constraint=Matter.Constraint;

var world,engine,canvas;
var pendulum1,pendulum2;

function setup()  {
canvas= createCanvas(windowWidth, windowHeight/1.5);
engine=Engine.create();
world= engine.world;

var canvasmouse= Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
var options = {
    mouse: canvasmouse
};
mConstraint = MouseConstraint.create(engine, options);
World.add(world, mConstraint);
pendulum1=new Pendulum(520,450,150);
sling1=new Sling(pendulum1.body,{x:520,y:200});
pendulum2=new Pendulum(580,450,170);
sling2=new Sling(pendulum2.body,{x:580,y:200});
pendulum3=new Pendulum(580,450,190);
sling3=new Sling(pendulum3.body,{x:640,y:200});
pendulum4=new Pendulum(580,450,210);
sling4=new Sling(pendulum4.body,{x:700,y:200});
pendulum5=new Pendulum(580,450,2300);
sling5=new Sling(pendulum5.body,{x:760,y:200});
}
function draw()  {
background(0);
Engine.update(engine);
pendulum1.display();
sling1.display();
pendulum2.display();
sling2.display();
pendulum3.display();
sling3.display();
pendulum4.display();
sling4.display();
pendulum5.display();
sling5.display();
}

function mouseDragged()  {
   Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY});

}