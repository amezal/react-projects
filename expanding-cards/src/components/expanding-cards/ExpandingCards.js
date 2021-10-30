import { useState } from 'react';
import './ExpandingCards.css'



function ExpandingCards() {
    const cards = [
        { img: '1', isActive: false },
        { img: '2', isActive: false },
        { img: '3', isActive: false },
        { img: '4', isActive: false },
        { img: '5', isActive: true }
    ]

    let [newCards, setCards] = useState(cards);

    function contract(img) {
        const lele = cards.map((card) => (
            { ...card, isActive: (img === card.img) }
        ))
        setCards(lele);
    }


    return (
        <div className="ExpandingCards">
            {newCards.map((card) => (
                <Card {...card} contract={contract} />
            ))}
        </div>
    );
}

function Card({ img, isActive, contract }) {

    function expand() {
        contract(img);
    }

    return (
        <img className={`Card ${isActive ? "active" : ""}`}
            onClick={expand} src={`/assets/expanding-cards/${img}.jpg`} alt="asdfasf" />
    )
}

export default ExpandingCards;