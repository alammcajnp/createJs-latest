import "./polyfills";
import * as createjs from "createjs-module";
import { Stage} from "@createjs/EaselJS"; 
import { createDOMStage, getDOMStage, handleResize } from "@/utils"; 
//import { CONFIG } from "@/config"; 

const init = () => {
  
  const body = document.getElementsByTagName("body")[0];
  const canvas = createDOMStage();
  body.append(canvas);

  window.onload = () => {
    
    const canvas = getDOMStage();
    const stage = new Stage(canvas);
    var queue;
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", handleComplete);
    queue.loadManifest([{id:"daisy", src:"h.png"}, {id:"sound", src:"sound.mp3"}]);

    function handleComplete(){
      var ball=new createjs.Shape();
      ball.addEventListener("click", handleClick);
      ball.graphics.beginFill("#000000").drawCircle(0, 0, 50);
      ball.x=50;
      ball.y=200;
      createjs.Tween.get(ball, {loop:true}).to({x:450}, 3000).to({x:50}, 3000);
      createjs.Ticker.addEventListener("tick", tick)
      stage.addChild(ball);
    }
    function handleClick(){
      var bmp = new createjs.Bitmap(queue.getResult("daisy"));
      bmp.x=Math.random()*500;
      bmp.y=Math.random()*500;
      stage.addChild(bmp);
      createjs.Sound.play("sound");
    }
    function tick(){
      stage.update();
    }

    handleResize(canvas, stage);
    window.onresize = () => handleResize(canvas, stage);
  };
};


init();
