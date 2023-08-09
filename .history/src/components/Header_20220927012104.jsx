import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from '../Buttons/CartBtn'
import Login from '../Buttons/Login'
import Signup from '../Buttons/Signup'



function Header() {
  return (
<>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid py-2">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">


      <label className="LanguageLabel" for="lang">
      <div className="ColoredIcon__IconWrapper-mnpnc5-0 heCbmI ColoredIcon gem-type-earth" style="height: 30px; width: 30px; background-color: transparent;"><div className="ColoredIcon__IconBackground-mnpnc5-1 wlliz ColoredIcon__background gem-icon" style="height: 30px; width: 30px; background-color: transparent;"><div className="ColoredIcon__IconHolder-mnpnc5-2 eDqktR ColoredIcon__holder" style="font-size: 14px; line-height: 14px; height: 14px; width: 14px;"></div></div></div>
      العربية
      <div className="ColoredIcon__IconWrapper-mnpnc5-0 heCbmI ColoredIcon gem-type-one-more-arrow" style="height: 20px; width: 20px; background-color: transparent; transform: rotate(45deg);"><div className="ColoredIcon__IconBackground-mnpnc5-1 wlliz ColoredIcon__background gem-icon" style="height: 20px; width: 20px; background-color: transparent; transform: rotate(45deg);"><div className="ColoredIcon__IconHolder-mnpnc5-2 eDqktR ColoredIcon__holder" style="font-size: 10px; line-height: 10px; height: 10px; width: 10px;"></div></div></div>
    </label>
          <select className="LanguageSelect" name="lang" id="lang" value="">
            <option value="ar">العربية</option><option value="bg">Български</option><option value="cs">Čeština</option><option value="da">Dansk</option><option value="de">Deutsch</option><option value="el">Ελληνικά</option><option value="en">English</option><option value="en-GB">English (UK)‬</option><option value="es">Español</option><option value="es-MX">Español mexicano‬‬</option><option value="et">Eesti</option><option value="fi">Suomi</option><option value="fr">Français</option><option value="hu">Magyar</option><option value="id">Bahasa Indonesia</option><option value="is">Íslenska</option><option value="it">Italiano</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="nl">Nederlands</option><option value="no">Norsk</option><option value="pl">Polski</option><option value="pt">Português</option><option value="pt-BR">Português do Brasil</option><option value="ro">Română</option><option value="ru">Русский</option><option value="sk">Slovenčina</option><option value="sr">Српски</option><option value="sv">Svenska</option><option value="th">ไทย / Phasa Thai</option><option value="tr">Türkçe</option><option value="uk">Українська</option><option value="vi">Tiếng Việt</option><option value="zh">中文</option><option value="zh-TW">中文(台灣)‬</option>
          </select>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/product">Product</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li> 
        </ul>
        <NavLink className="navbar-brand fw-bold m-auto" to="/">APPLE MART</NavLink>

        <Login/>
        <Signup/>
        <CartBtn/>

      </div>
    </div>
  </nav>
</>
  )
}

export default Header
