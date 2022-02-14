import CardGame from "../CardGame";
import './style.css';

function CardFrontBack() {
    return`
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("Javascript", "Logo do Javascript")}
            </div>    


        </article>
    `;
}

export default CardFrontBack;