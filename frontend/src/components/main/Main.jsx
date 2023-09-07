import { useContext } from "react";
import Card from "../card/Card";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onDeleteCard,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <button
          type="button"
          className="profile__avatar-button"
          onClick={onEditAvatar}
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            name="avatar"
            alt="Аватар на странице"
          />
        </button>
        <div className="profile-info">
          <h1 className="profile-info__author">{currentUser.name}</h1>
          <p className="profile-info__description">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__edit-button"
          onClick={onEditProfile}
        />
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        {cards.map((data) => {
          // console.log(data)
          return (
            <div className="elements__list" key={data._id}>
              <Card
                card={data}
                onCardClick={onCardClick}
                onDeleteCard={onDeleteCard}
                onCardLike={onCardLike}
              />
            </div>
          );
        })}{" "}
      </section>
    </main>
  );
}
