import CardGame from "../CardGame";
import './style.css';

function CardFrontBack() {
    return`
        <article class="card-front-back">
            <>
                ${CardGame()}
                ${CardGame("Javascript", "Logo do Javascript")}
            </>


        </article>
    `;
}

export default CardFrontBack;