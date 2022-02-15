import './style.css';

function ArrowDown(currentPlayer = 1) {
    return `
        <img class="arrow-down"  data-currentPlayer="${currentPlayer}"
            src="images/iconArrowDown.svg" 
            alt="Ícon de uma seta para baixo" />
    `;
}

export default ArrowDown;