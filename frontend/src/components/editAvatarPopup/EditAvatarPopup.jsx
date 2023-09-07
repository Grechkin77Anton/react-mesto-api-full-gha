import { useEffect, useRef } from "react"
import useFormValidation from "../../utils/useFormValidation"
import PopupWithForm from "../popupWithForm/PopupWithForm"


export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const inputData = useRef()
    const {handleChange, values, errors, isValid, isInputValid, formReset} = useFormValidation()

    function resetOnClose() {
        onClose()
        formReset()
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        onUpdateAvatar({avatar: inputData.current.value})
    }

    useEffect(() => {
        if(!isOpen) {
            formReset();
        }
    },[isOpen])

    return (

        <PopupWithForm
            name='edit-avatar'
            title='Обновить аватар'
            isOpen={isOpen}
            onClose={resetOnClose}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <input
                ref={inputData}
                type="url"
                className={`popup__input ${isInputValid.avatar === undefined || isInputValid.avatar ? '' : 'popup__input_invalid'}`}
                name="avatar"
                id="avatar"
                placeholder="Ссылка на новый аватар"
                required
                onChange={handleChange}
                value={values.avatar ? values.avatar : ''}
            />
            <span
                id="avatar-error"
                className="popup__error popup__error_type_avatar popup__error_visible"
            >{errors.avatar}</span>
        </PopupWithForm>
    )
}