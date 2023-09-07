import { useEffect } from "react";
import useFormValidation from "../../utils/useFormValidation";
import PopupWithForm from "../popupWithForm/PopupWithForm";


export default function AddPlacePopup({onClose, isOpen , onAddPlace}) {

    const {handleChange, values, errors, isValid, isInputValid, formReset} = useFormValidation()

    function resetOnClose() {
        onClose()
        formReset()
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        onAddPlace({name:values.name, link:values.link})
    }

    useEffect(() => {
        if(!isOpen) {
            formReset();
        }
    },[isOpen])
   
    return (
        <PopupWithForm
          name='add-card'
          title='Новое место'
          titleButton='Создать'
          isOpen={isOpen}
          isValid={isValid}
          onClose={resetOnClose}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className={`popup__input ${isInputValid.name === undefined || isInputValid.name ? '' : 'popup__input_invalid'}`}
            name="name"
            id="place-title"
            placeholder="Название места"
            minLength={2}
            maxLength={30}
            required
            onChange={handleChange}
            value={values.name ? values.name : ''}
          />
          <span
            id="place-title-error"
            className="popup__error popup__error_type_place-title popup__error_visible"
          >{errors.name}</span>
          <input
            type="url"
            className={`popup__input ${isInputValid.link === undefined || isInputValid.link ? '' : 'popup__input_invalid'}`}
            name="link"
            id="place-link"
            placeholder="Ссылка на фото"
            required
            onChange={handleChange}
            value={values.link ? values.link : ''}
          />
          <span
            id="place-link-error"
            className="popup__error popup__error_type_place-link popup__error_visible"
          >{errors.link}</span>
        </PopupWithForm>

    )

}