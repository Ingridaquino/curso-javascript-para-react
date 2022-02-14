import "./style.css";

import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";


function Scoreboard() {
    return`
        <header class="score-board"> 
            ${PlayerName("Player1")}
            ${PlayerScore()}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default  Scoreboard;