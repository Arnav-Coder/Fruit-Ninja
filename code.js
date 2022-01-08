var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1659394b-d788-4d9e-afff-3e49cf08d263","af1c0153-0dad-4224-bad4-a4cbe07f2d32","4c112526-0db7-4152-bee7-a81f8c5347b9","d169671e-c6a5-4d90-8ba4-e041a7ad1bc1","7591bbc1-cc35-44c0-bacc-2c8f1d7faaa4","a3bec2d2-640c-4a5f-bed5-b961a9879bf1","9474ad72-bbab-4624-960f-5eb5f14ab3b5","fcd46ee8-1c2c-438c-9ac6-a0f7f33d3a18","7ccda669-6d00-4ea9-9fd1-02add37051f7","95fde31a-290a-4339-a1e9-3c4bba0d7dfc","b7d906e3-fb6f-4167-bedd-a29633217aad","a92fefaf-c335-4e4c-92eb-ed12f2142535"],"propsByKey":{"1659394b-d788-4d9e-afff-3e49cf08d263":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/FRtuEe_muZ55qvpx5ub8Gb1Vvsm1zTEY/category_backgrounds/texture_15.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":10,"version":"FRtuEe_muZ55qvpx5ub8Gb1Vvsm1zTEY","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FRtuEe_muZ55qvpx5ub8Gb1Vvsm1zTEY/category_backgrounds/texture_15.png"},"af1c0153-0dad-4224-bad4-a4cbe07f2d32":{"name":"sword","sourceUrl":null,"frameSize":{"x":398,"y":398},"frameCount":2,"looping":true,"frameDelay":10,"version":"iiCTYSDuWEGyFy4YBbxZ6AMAobpsjkaI","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":796},"rootRelativePath":"assets/af1c0153-0dad-4224-bad4-a4cbe07f2d32.png"},"4c112526-0db7-4152-bee7-a81f8c5347b9":{"name":"fruit1","sourceUrl":"assets/api/v1/animation-library/gamelab/R5HU7H.MzPJgfu.WtncglTeef4BzKuzc/category_food/apple_1.png","frameSize":{"x":333,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"R5HU7H.MzPJgfu.WtncglTeef4BzKuzc","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":333,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/R5HU7H.MzPJgfu.WtncglTeef4BzKuzc/category_food/apple_1.png"},"d169671e-c6a5-4d90-8ba4-e041a7ad1bc1":{"name":"fruit2","sourceUrl":"assets/api/v1/animation-library/gamelab/RA6HGLBQMgUGLXEkQQATdAwHa5Jw7pZJ/category_food/watermelon_1.png","frameSize":{"x":387,"y":349},"frameCount":1,"looping":true,"frameDelay":2,"version":"RA6HGLBQMgUGLXEkQQATdAwHa5Jw7pZJ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":349},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RA6HGLBQMgUGLXEkQQATdAwHa5Jw7pZJ/category_food/watermelon_1.png"},"7591bbc1-cc35-44c0-bacc-2c8f1d7faaa4":{"name":"fruit3","sourceUrl":"assets/api/v1/animation-library/gamelab/0ueAniL.9kcku0.my8bzMRDc52cBuY8D/category_food/grapes_1.png","frameSize":{"x":388,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"0ueAniL.9kcku0.my8bzMRDc52cBuY8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0ueAniL.9kcku0.my8bzMRDc52cBuY8D/category_food/grapes_1.png"},"a3bec2d2-640c-4a5f-bed5-b961a9879bf1":{"name":"fruit4","sourceUrl":"assets/api/v1/animation-library/gamelab/BAGCo_oPYQWizIBXyXAbxWFRwTlAah81/category_food/orange_1.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"BAGCo_oPYQWizIBXyXAbxWFRwTlAah81","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BAGCo_oPYQWizIBXyXAbxWFRwTlAah81/category_food/orange_1.png"},"9474ad72-bbab-4624-960f-5eb5f14ab3b5":{"name":"fruit5","sourceUrl":"assets/api/v1/animation-library/gamelab/WoWnacFDWgYbNwCuE39tGAGl8BwHkEsk/category_food/banana_1.png","frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":2,"version":"WoWnacFDWgYbNwCuE39tGAGl8BwHkEsk","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/api/v1/animation-library/gamelab/WoWnacFDWgYbNwCuE39tGAGl8BwHkEsk/category_food/banana_1.png"},"fcd46ee8-1c2c-438c-9ac6-a0f7f33d3a18":{"name":"over","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"7ccda669-6d00-4ea9-9fd1-02add37051f7":{"name":"ready","sourceUrl":"assets/api/v1/animation-library/gamelab/plOmgtOBGPyQ.xCGlkLSCQ8RzDoTR3LI/category_video_games/textGetReady.png","frameSize":{"x":400,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"plOmgtOBGPyQ.xCGlkLSCQ8RzDoTR3LI","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/plOmgtOBGPyQ.xCGlkLSCQ8RzDoTR3LI/category_video_games/textGetReady.png"},"95fde31a-290a-4339-a1e9-3c4bba0d7dfc":{"name":"bomb1","sourceUrl":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png","frameSize":{"x":360,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ouSniUdBPmByS9qdf395XpliE0eUsMAm","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png"},"b7d906e3-fb6f-4167-bedd-a29633217aad":{"name":"bomb2","sourceUrl":"assets/api/v1/animation-library/gamelab/4VzcditYIaaf0.l3_P3qntupPmHANSFg/category_video_games/gameplayobject_item_01.png","frameSize":{"x":346,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"4VzcditYIaaf0.l3_P3qntupPmHANSFg","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4VzcditYIaaf0.l3_P3qntupPmHANSFg/category_video_games/gameplayobject_item_01.png"},"a92fefaf-c335-4e4c-92eb-ed12f2142535":{"name":"bomb3","sourceUrl":"assets/api/v1/animation-library/gamelab/O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF/category_video_games/gameplayobject_item_02.png","frameSize":{"x":384,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF/category_video_games/gameplayobject_item_02.png"}}};
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

//Creating Background
var bg = createSprite(200,200);
    bg.setAnimation("bg");

//Creating Sword    
var sword = createSprite(200,200);
    sword.setAnimation("sword");
    sword.scale = 0.25;
    
var fruitGroup = createGroup();
var bombGroup  = createGroup();
    
var ready = createSprite(200,200);
    ready.setAnimation("ready");
    ready.visible = true;
    
var over = createSprite(200,175);    
    over.setAnimation("over");
    over.visible = false;
    
var score = 0;    

var gameState = "start";
    
function Score(){
  if(sword.isTouching(fruitGroup)){
    
    score++;
    fruitGroup.destroyEach();
    
    playSound("assets/category_swish/deep_swish_1.mp3",false);
  }
}    

function Over (){
  if(sword.isTouching(bombGroup)){
    
    gameState = "over";
    fruitGroup.destroyEach();
    bombGroup.destroyEach();
    
    playSound("assets/category_music/8bit_game_over_1.mp3",false);
  }
}
    
function SpawnFruits(){
//FrameCount is displayed as per the run time
//For more time code is being runed the more frameCounts are counted

  if(World.frameCount % 50 == 0){
    var fruits = createSprite(random(10,390));
        fruits.setAnimation("fruit"+randomNumber(1,5));
    fruits.scale = 0.13;
    fruits.velocityY = 10+(score/6);
    fruits.lifetime = 45;
    
    fruitGroup.add(fruits);
    
  }
}    

function SpawnBombs(){
  if(World.frameCount % 80 === 0){
    var bombs = createSprite(random(10,390));
        bombs.setAnimation("bomb"+randomNumber(1,3));
    bombs.scale = 0.13;
    bombs.velocityY = 10+(score/10);
    
    bombs.lifetime = 45;
    
    bombGroup.add(bombs);
  }
}

function draw(){
  
  drawSprites();
    
if(gameState == "start"){
  
  ready.visible = true;
  sword.visible = false;
  over.visible = false;
  
  if(World.frameCount % 50 == 0){
    
    gameState = "play";
    ready.visible = false;
    
    playSound("assets/category_music/clear_evidence_loop1.mp3",true);
    
  }
}  
  
if(gameState == "play"){
  
  sword.visible = "true";  
    
  ready.visible = false;  
    
  Score();
  Over();
  SpawnFruits();
  SpawnBombs();
  
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  
  textSize(30);
  fill("Black");
  text("Score :" + score,250,30);
  
  }
  
if(gameState == "over"){
  
  stopSound("assets/category_music/clear_evidence_loop1.mp3");
  sword.visible = false;
  over.visible = true;
  
  textSize(30);
  fill("Black");
  text("Score :" + score,150,250);
  text("Press SPACE to restart",45,300);
  
  if(keyDown("SPACE")){
    
    gameState = "start";
    score = 0;
    fruitGroup.destroyEach();
    bombGroup.destroyEach();
  }
  
}

}  


//To stop sword from going out of the screen
//  createEdgeSprites();
//  sword.bounceOff(edges);  

//To see x and y position of sword
//  console.log(sword.x);
//  console.log(sword.y);

//To see frameCounts
//  console.log(frameCount);

//The function that works on clicking selected  Sprite 
//  if(mousePressedOver());





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
