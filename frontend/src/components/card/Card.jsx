import { useContext } from "react"
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import ButtonLike from '../ButtonLike/ButtonLike.jsx';

export default function Card({card, onCardClick, onDeleteCard, onCardLike}) {
    const currentUser = useContext(CurrentUserContext) 
    return (
        <article className="element">
            {currentUser._id === card.owner && <button type="button" className="element__remove" onClick={() => onDeleteCard(card._id) }/>}
            <img className="element__photo" src={card.link} alt={card.name} onClick={() => onCardClick({link:card.link, name:card.name})}/>
            <div className="element__reaction">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__reaction-wrapper">
                    <ButtonLike onCardLike={onCardLike} myId={currentUser._id} card={card} />
                </div>
            </div>
        </article>
    )
} 