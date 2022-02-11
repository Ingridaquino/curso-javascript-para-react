import "./src/styles/settings/colors.css";
import './src/styles/gereric/reset.css';
import './src/styles/elements/base.css';
import Scoreboard from "./src/objects/Scoreboard";
import BoardGame from "./src/objects/boardGame";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",
    `
      ${Scoreboard()}
     
      ${BoardGame(2)} 
    `
    //Definir quantas vezes repetir os cartões.
  );