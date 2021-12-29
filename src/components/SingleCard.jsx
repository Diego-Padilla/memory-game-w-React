import './SingleCard.css'
const card_cover = '/img/cover.png'

export default function SingleCard({ card, handleChoice, flipped,disabled}) {
    const handleClick = () =>{
        if(!disabled){
            handleChoice(card)
        }
        
    }

    return (
        <div className="card">
            <div className={flipped ? 'flipped' : ''}>
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


    
    
    
    
