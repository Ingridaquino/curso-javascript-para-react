import CardGame from "../CardGame";

function CardFrontBack() {
    return`
        <article class="card-front-back">
             ${CardGame()}
             ${CardGame("Javascript", "Logo do Javascript")}
             ${CardGame("html", "Logo do HTML")}
             ${CardGame("css", "Logo do CSS")}


        </article>
    `;
}

export default CardFrontBack;