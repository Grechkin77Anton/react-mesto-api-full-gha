import { useEffect, useState } from "react";

export default function ButtonLike({myId, card, onCardLike}) {
    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        setIsLike(card.likes.some((item) => myId === item))
    }, [card, myId])

    return (
        <>
          <button type="button" className={`element__like ${isLike ? 'element__like_active' : ""}`} onClick={() => onCardLike(card)} /> 
          <span className="element__counter">{card.likes.length}</span>
        </>
    )
} 