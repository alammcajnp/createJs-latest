/* eslint-disable eol-last */

import { createDOMStage } from "@/utils";

const body = document.getElementsByTagName("body")[0];
const canvas = createDOMStage();
body.append(canvas);



let div = document.createElement("div");
let link = document.createElement("a");
link.href = "/about";
link.innerText = "About";
body.appendChild(link);
body.appendChild(div);