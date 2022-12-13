import "./polyfills";
//import * as createjs from "createjs-module";
//import { Stage} from "@createjs/EaselJS"; 
//import { createDOMStage, getDOMStage, handleResize } from "@/utils"; 
import { createDOMStage } from "@/utils"; 



import "./styles.css";
const init = () => {
  window.onload = () => { 
    const body = document.getElementsByTagName("body")[0];
    const canvas = createDOMStage();
    body.append(canvas);
    console.log(canvas.getContext);

    if (canvas.getContext) {
          const ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200, 0, 0)";
          ctx.fillRect(10, 10, 50, 50);

          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect(30, 30, 50, 50);

          
          ctx.fillStyle = "black";
          ctx.fillRect(150, 10, 100, 100);
          ctx.clearRect(168, 30, 60, 60);
          ctx.strokeRect(172, 35, 50, 50); 

          ctx.beginPath();
          ctx.fillStyle = "black";
          ctx.moveTo(255, 60);
          ctx.lineTo(290, 25);
          ctx.lineTo(290, 90);
          ctx.fill(); 

          ctx.setLineDash([5, 15]);

          ctx.beginPath();
          ctx.moveTo(0, 100); 
          // bezier curve
          ctx.bezierCurveTo(10, 10, 300, 200, 400, 150); 
          ctx.lineWidth = 5;
          ctx.strokeStyle = "blue";
          ctx.stroke(); 
          // second half of curve
          ctx.beginPath();
          ctx.strokeStyle="#DDDDFF";
          ctx.bezierCurveTo(100, 100, 200, 220, 450, 20);
          ctx.stroke();

          ctx.beginPath();
          ctx.strokeStyle="yellow";
          ctx.moveTo(20, 20);
          ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
          ctx.stroke();
          
          
          canvas.addEventListener("click", click);

         
          
    }
  };
};

function click(){
  alert("THis");
}

init();
