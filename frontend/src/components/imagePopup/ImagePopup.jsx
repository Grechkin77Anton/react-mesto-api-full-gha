export default function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_image ${card && "popup_opened"}`}
      onClick={onClose}
    >
      <div className="popup__image-container">
        <img
          className="popup__image"
          src={card ? card.link : "#"}
          alt={card ? card.name : "#"}
        />
        <p className="popup__image-title">{card && card.name}</p>
        <button
          type="button"
          className="popup__close popup__close_place_image-container"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
