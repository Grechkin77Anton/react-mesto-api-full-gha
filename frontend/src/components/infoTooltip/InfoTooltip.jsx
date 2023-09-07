

export default function InfoToolTip({name, titleText , isOpen, onClose}) {

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
          <div className={`popup__response_${name}`}>
            <div className={`popup__response_image_${name}`}></div>
            <h2 className={'popup__response_title'}>{titleText}</h2>
            <button type="button" className="popup__close" onClick={onClose}/>
          </div>
         
      </div>
    )
}