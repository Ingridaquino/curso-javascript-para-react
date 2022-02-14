import "./style.css";
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import Placar from "../../components/Placar";

function Scoreboard() {
    return`
        <header class="score-board"> 
            ${PlayerName("Player1")}
            ${Placar("Placar1")}
            ${VsPlayer()}
            ${Placar("Placar2")}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default  Scoreboard;