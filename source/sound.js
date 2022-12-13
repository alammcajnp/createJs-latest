import "./polyfills";
import * as createjs from "createjs-module";
//import { CONFIG } from "@/config"; 

const init = () => {
  window.onload = () => {
    createjs.Sound.on("fileload", handleLoad);
    createjs.Sound.registerSound("sound.mp3", "myID", 3);
    function handleLoad() {
    createjs.Sound.play("myID");
        // store off AbstractSoundInstance for controlling
        createjs.Sound.play("myID", {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
    }
    //this.audio1.paused = true; // pause     
    //this.audio1.paused = false; // resume 

    this.onOff_btn.on("click", function () {
            if (createjs.Sound.getVolume() < 0.5) {
                createjs.Sound.setVolume(1);
            } else {
                createjs.Sound.setVolume(0);
            }
        });
  };
};


init();
