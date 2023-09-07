export default function PopupWithForm({name, title,titleButton, children, isOpen, onClose, onSubmit , isValid=true}) {
   
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
          <div className="popup__container">
            <h2 className="popup__title">{title}</h2>
            <form
              noValidate
              method="POST"
              name={name}
              className="popup__inputs popup__form"
              onSubmit={onSubmit}
              >
                
              <div className="popup__input-container">

              {children}
                <button
                  type="submit"
                  className={`popup__button-save popup__button" ${name === 'delete' ? 'popup__button-delete' : ''} ${isValid ? '' : 'popup__button_disabled'}`}>
                  {titleButton || 'Сохранить'}
                </button>
              </div>
            </form>
            <button type="button" className="popup__close" onClick={onClose}/>
          </div>
         
      </div>
    )
}