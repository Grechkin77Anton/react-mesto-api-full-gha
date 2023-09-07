
import PopupWithForm from "../popupWithForm/PopupWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormValidation from "../../utils/useFormValidation";
import { useContext, useEffect } from "react";

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext)
    const {handleChange, values, errors, isValid, isInputValid, formReset } = useFormValidation()

    useEffect(() => {
        formReset({
          username: currentUser.name,
          description: currentUser.about,
        });
      }, [isOpen, currentUser]);


    function resetOnClose() {
        onClose()
        formReset({username:currentUser.name, description: currentUser.about})
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        onUpdateUser({username:values.username, description:values.description})
    }

    return (
        <PopupWithForm
            name='edit-profile'
            title='Редактировать профиль'
            titleButton='Сохранить'
            isOpen={isOpen}
            onClose={resetOnClose}
            isValid={isValid}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className={`popup__input ${isInputValid.username === undefined || isInputValid.username ? '' : 'popup__input_invalid'}`}
                name="username"
                id="name"
                placeholder="Имя"
                minLength={2}
                maxLength={40}
                required
                onChange={handleChange}
                value={values.username ? values.username : ''}
            />
            <span
                id="name-error"
                className= "popup__error popup__error_type_name popup__error_visible"
            >{errors.username}</span>
            <input
                type="text"
                className={`popup__input ${isInputValid.description === undefined || isInputValid.description ? '' : 'popup__input_invalid'}`}
                name="description"
                id="description"
                placeholder="О себе"
                minLength={2}
                maxLength={200}
                required
                onChange={handleChange}
                value={values.description ? values.description : ''} 
            />
            <span
                id="description-error"
                className="popup__error popup__error_type_description popup__error_visible"
            >{errors.description}</span>
        </PopupWithForm>
    )
}