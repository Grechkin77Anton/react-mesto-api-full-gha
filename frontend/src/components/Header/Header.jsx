import logo from "../../images/logo-white.png";
import { Link } from "react-router-dom";

export default function Header({ name, dataUser, loggedIn, onSingOut}) {
  // console.log(loggedIn)
  
  return (
    <header className="header">
      <img 
      className="header__logo" 
      src={logo} 
      alt="Логотип Место Россия" 
      />
        <div className="header__links">
          {name === "signup" || name === "signin" ? (
                  <Link to={name === "signup" ? "/signin" : "/signup"} className="header__link"> {name === "signup" ? "Войти" : "Регистрация"} </Link> 
              ) : (
                  <>
                    {/* <div className="header__links"> */}
                      <p className="header__email">{dataUser}</p>
                      <Link to={`/signin`} className="header__link" onClick={onSingOut}>Выйти</Link>
                    {/* </div> */}
                  </>
                )}
        </div>
    </header>
  );
}
