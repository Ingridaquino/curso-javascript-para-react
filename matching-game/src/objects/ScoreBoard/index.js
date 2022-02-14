import "./style.css";

import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";


function Scoreboard() {
    return`
        <header class="score-board"> 
            ${PlayerName("Player1")}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore(2)}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default  Scoreboard;