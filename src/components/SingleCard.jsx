import './SingleCard.css'
const card_cover = '/img/cover.png'

export default function SingleCard({ card, handleChoice}) {
    const handleClick = () =>{
        handleChoice(card);
    }

    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="Card Front" />
                <img className="back" 
                src={card_cover} 
                onClick={handleClick}
                alt="Card Back" 
                />
            </div>
      </div>
      );
    }


    
    
    
    
