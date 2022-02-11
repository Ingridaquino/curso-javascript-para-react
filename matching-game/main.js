import "./src/styles/settings/colors.css";
import './src/styles/gereric/reset.css';
import './src/styles/elements/base.css';
import BoardGame from "./src/objects/BoardGame";
import Scoreboard from "./src/objects/Scoreboard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",
    `
      ${Scoreboard()}
     
      ${BoardGame(6)} 
    `
    //Definir quantas vezes repetir os cartões.
  );