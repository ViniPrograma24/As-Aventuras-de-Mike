var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//sprites parte 1
var mike = createSprite(25, 200,20,20);
mike.shapeColor = "blue";
var borda1 = createSprite(200, 100,400,5);
borda1.shapeColor="GRAY";
var borda2 = createSprite(200, 300,400,5);
borda2.shapeColor="GRAY";
var portal1 = createSprite(375, 200,10,70);
portal1.shapeColor="green";
var laser1 = createSprite(135, 200,15,15);
laser1.shapeColor="red";
laser1.velocityY= -9;
var laser2 = createSprite(200, 200,15,15);
laser2.shapeColor="red";
laser2.velocityY= 9;
var laser3 = createSprite(265, 200,15,15);
laser3.shapeColor="red";
laser3.velocityY= -9;
var life = 5;


//sprites parte 2
var borda3 = createSprite(400, 0,5,400);
borda3.shapeColor="gray";
var borda4 = createSprite(400, 0,5,400);
borda4.shapeColor="gray";
var laser4 = createSprite(400, 0,15,15);
laser4.shapeColor="red";
var laser5 = createSprite(400, 0,15,15);
laser5.shapeColor="red";
var laser6 = createSprite(400, 0,15,15);
laser6.shapeColor="red";
var portal2 = createSprite(400, 0,70,10);
portal2.shapeColor="green";

//sprites parte 3
var borda5 = createSprite(400, 0,400,5);
borda5.shapeColor="gray";
var borda6 = createSprite(400, 0,400,5);
borda6.shapeColor="gray";
var laser7 = createSprite(400, 0,15,15);
laser7.shapeColor="red";
var laser8 = createSprite(400, 0,15,15);
laser8.shapeColor="red";
var laser9 = createSprite(400, 0,15,15);
laser9.shapeColor="red";
var portal3 = createSprite(400, 0,10,70);
portal3.shapeColor="green";

//sprites parte 4
var borda7 = createSprite(400, 0,5,400);
borda7.shapeColor="gray";
var borda8 = createSprite(400, 0,5,400);
borda8.shapeColor="gray";
var laser10 = createSprite(400, 0,15,15);
laser10.shapeColor="red";
var laser11 = createSprite(400, 0,15,15);
laser11.shapeColor="red";
var laser12 = createSprite(400, 0,15,15);
laser12.shapeColor="red";
var superGema = createSprite(400, 0,15,15);
superGema.shapeColor="gold";

//partes que escondem outros sprites 
var vazio1 = createSprite(375, 50,50,95);
vazio1.shapeColor="white";
var vazio2 = createSprite(375, 127,50,50);
vazio2.shapeColor="white"; 
var vazio3 = createSprite(400, 175,10,50);
vazio3.shapeColor="white";
var vazio4 = createSprite(400, 0,70,10);
vazio4.shapeColor="white";
var pontosPortal = 0;
var vazio5 = createSprite(300, 0,300,10);
vazio5.shapeColor="white";

function draw() {
  
  //pano de fundo
  background("white");
  
  // comandos de movimento do mike
   if (keyDown("up")) {
    mike.y=mike.y-5;
  }
  if (keyDown("down")) {
    mike.y=mike.y+5;
  }
if (keyDown("left")) {
  mike.x=mike.x-5 ;
}
if (keyDown("right")) {
  mike.x=mike.x+5 ;
}
//bounces
createEdgeSprites();
  laser1.bounceOff(borda1);
  laser1.bounceOff(borda2);
  laser2.bounceOff(borda1);
  laser2.bounceOff(borda2);
  laser3.bounceOff(borda1);
  laser3.bounceOff(borda2);
  laser4.bounceOff(borda3);
  laser4.bounceOff(borda4);
  laser5.bounceOff(borda3);
  laser5.bounceOff(borda4);
  laser6.bounceOff(borda3);
  laser6.bounceOff(borda4);
  laser7.bounceOff(borda5);
  laser7.bounceOff(borda6);
  laser8.bounceOff(borda5);
  laser8.bounceOff(borda6);
  laser9.bounceOff(borda5);
  laser9.bounceOff(borda6);
  laser10.bounceOff(borda7);
  laser10.bounceOff(borda8);
  laser11.bounceOff(borda7);
  laser11.bounceOff(borda8);
  laser12.bounceOff(borda7);
  laser12.bounceOff(borda8);
  mike.bounceOff(edges);
  mike.bounceOff(borda1);
  mike.bounceOff(borda2);
  mike.bounceOff(borda3);
  mike.bounceOff(borda4);
  mike.bounceOff(vazio3);
  mike.bounceOff(vazio4);
  mike.bounceOff(vazio2);
  mike.bounceOff(borda5);
  mike.bounceOff(borda6);
  mike.bounceOff(borda7);
  mike.bounceOff(borda8);
  
  //mortes do mike
  if (mike.isTouching(laser1)) {
    life = life -1;
     mike.x = 25;
     mike.y = 200;
  }
   if (mike.isTouching(laser2)) {
    life = life -1;
     mike.x = 25;
     mike.y = 200;
  } 
   if (mike.isTouching(laser3)) {
    life = life -1;
     mike.x = 25;
     mike.y = 200;
  } 
  if (mike.isTouching(laser4)) {
    life = life -1;
     mike.x = 200;
     mike.y = 378;
  } 
  
  if (mike.isTouching(laser5)) {
    life = life -1;
     mike.x = 200;
     mike.y = 378;
  } 
  if (mike.isTouching(laser6)) {
    life = life -1;
     mike.x = 200;
     mike.y = 378;
  } 
  if (mike.isTouching(laser7)) {
    life = life -1;
     mike.x = 375;
     mike.y = 200;
  } 
  if (mike.isTouching(laser8)) {
    life = life -1;
     mike.x = 375;
     mike.y = 200;
  } 
  if (mike.isTouching(laser9)) {
    life = life -1;
     mike.x = 375;
     mike.y = 200;
  } 
  if (mike.isTouching(laser10)) {
    life = life -1;
     mike.x = 200;
     mike.y = 25;
  } 
  if (mike.isTouching(laser11)) {
    life = life -1;
     mike.x = 200;
     mike.y = 25;
  } 
  if (mike.isTouching(laser12)) {
    life = life -1;
     mike.x = 200;
     mike.y = 25;
  } 
  //vidas de mike
    text("VIDAS: " + life,17,27);
    
  //Parte para a mensagem de final funcionar
  text("MOEDAS: " + pontosPortal,89,27);
  
    // se a vida de mike acabar
    if (life=== 0) {
    fill("red");
    textSize(18);
    text("Mike morreu",155,200);
    borda1.destroy();
    borda2.destroy();
    laser1.destroy();
    laser2.destroy();
    laser3.destroy();
    laser4.destroy();
    laser5.destroy();
    laser6.destroy();
    borda3.destroy();
    borda4.destroy();
    portal1.destroy();
    portal2.destroy();
    portal3.destroy();
    superGema.destroy();
    mike.destroy();
    borda5.destroy();
    borda6.destroy();
    laser7.destroy();
    laser8.destroy();
    laser9.destroy();
    borda7.destroy();
    borda8.destroy();
    laser10.destroy();
    laser11.destroy();
    laser12.destroy();
  }
   //se mike chegar no primeiro portal
   if (mike.isTouching(portal1)) {
    laser1.destroy();
    laser2.destroy();
    laser3.destroy();
    portal1.destroy();
    borda1.destroy();
    borda2.destroy();
    mike.x =200;
    mike.y=365;
    borda3.x=300;
    borda3.y=200;
    borda4.x=100;
    borda4.y=200;
    laser4.x=200;
    laser4.y=315;
    laser4.velocityX=-9;
    laser5.x=200;
    laser5.y=200;
    laser5.velocityX=9;
    laser6.x=200;
    laser6.y=85;
    laser6.velocityX=-9;
    portal2.x=200;
    portal2.y=15;
    pontosPortal = pontosPortal +5;
   }
   //se mike chegar no segundo portal
  if (mike.isTouching(portal2)) {
     borda3.destroy();
  borda4.destroy();
  laser4.destroy();
  laser5.destroy();
  laser6.destroy();
  portal2.destroy();
  borda5.x=200;
  borda5.y=100;
  borda6.x=200;
  borda6.y=300;
  pontosPortal =pontosPortal +5;
  mike.x=370;
  mike.y=200;
  laser7.x=265;
  laser7.y=200;
  laser7.velocityY=9;
  laser8.x=135;
  laser8.y=200;
  laser8.velocityY=9;
  laser9.x=200;
  laser9.y=200;
  laser9.velocityY=-9;
  portal3.x=25;
  portal3.y=200;
   }
    
//se mike chegar no terceiro portal    
if (mike.isTouching(portal3)) {
  pontosPortal =pontosPortal +5;
    borda5.destroy();
    borda6.destroy();
    laser7.destroy();
    laser8.destroy();
    laser9.destroy();
    portal3.destroy();
    mike.x=200;
    mike.y=25;
    borda7.x=100;
    borda7.y=200;
    borda8.x=300;
    borda8.y=200;
    superGema.x=200;
    superGema.y=375;
    laser10.x=200;
    laser10.y=75;
    laser10.velocityX=9;
    laser11.x=200;
    laser11.y=200;
    laser11.velocityX=-9;
    laser12.x=200;
    laser12.y=315;
    laser12.velocityX=9;
    
}

//se mike chegar no quarto portal
if (mike.isTouching(superGema)) {
  pontosPortal = pontosPortal +5;
  borda7.destroy();
  borda8.destroy();
  laser10.destroy();
  laser11.destroy();
  laser12.destroy();
  superGema.destroy();
  mike.destroy();
  
}




    
 //mensagem de final
   if (pontosPortal=== 20) {
     fill("blue");
    textSize(18);
    text("Mike achou a Super Gema",102,200);
   }
   
   
    
  drawSprites();
}

// HISTÓRIA: Mike era um garoto que adorava colecionar coisas raras, até que
// um dia Mike achou um livro que falava sobre a LENDA DA SUPER GEMA e 
//lá continha um mapa para achar-la, e ele decidiu
// ir atras da gema, então ele embarcou numa grande jornada para encontra-la.

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
