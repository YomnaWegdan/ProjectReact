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
      <div className="ColoredIcon__IconWrapper-mnpnc5-0 heCbmI ColoredIcon gem-type-earth" style="height: 30px; width: 30px; background-color: transparent;"><div className="ColoredIcon__IconBackground-mnpnc5-1 wlliz ColoredIcon__background gem-icon" style="height: 30px; width: 30px; background-color: transparent;"><div className="ColoredIcon__IconHolder-mnpnc5-2 eDqktR ColoredIcon__holder" style="font-size: 14px; line-height: 14px; height: 14px; width: 14px;"><svg viewBox="0 0 36 36" className="ColoredIcon__IconBody-mnpnc5-3 huSBZa ColoredIcon__element ColoredIcon__element--svg" style="font-size: 14px; line-height: 14px; height: 14px; width: 14px;"><g><path className="st0" d="M18 0C8.1 0 0 8.1 0 18s8.1 18 18 18 18-8.1 18-18S27.9 0 18 0zm11.4 9.3s.7.8.8 1.5c1.2 0-.5 1.5-.5 1.5s0-.7-.5-1.3c-.6-.5-.3-1.7.2-1.7zm-.8 5.1c.8.1.5-1.8.5-1.8s2 .3 2.6-.8c.2-.4.4-.6.7-.8.6 1.3 1.1 2.7 1.4 4.1v1.1s-1.4-2.2-2.6-1.3c-1.1.9-3.5 2.6-3.8 1.3-.4-1.4.4-2.2 1.2-1.8zm-16.9-10c-.1-.7.2-1.1.2-1.2h.1c.2.1 1.7.9 1.8 1.5.1.5.8.7 1.1.7h0c-.3 0-1.1 0-.9.8.1 1-1.2 1.2-1.5.5C12.2 6 11 6 11 6s.8-.8.7-1.6zM2 18.2zm17.7 9.7c-.8 1.4-2.4 3.4-3.8 4.3-.8.5-1.1 1-1.2 1.4-1.6-.3-3-.9-4.4-1.7.2-.4 1-2.4.2-2.8-.8-.4-1.6-2.3-2-3.1-.4-.8.7-1.6.8-2.6.1-.9-2.5-3.4-5.4-3.8-.6-1.3-1.2-2.3-1.7-3 .3-3.9 2-7.5 4.7-10.1-.2.5-.1 1 .4 1.6 2 2 3.8 2.8 3.6.8-.3-2 .4-2.4 1-1.5.6.9 1.8 1.4 2.3.8.5-.6.4 1.9 2 2.6 1.3.5-.6 1.5-1 1.3s-1.8-.5-1.3.3-.8.8-.8.8-.9 1.3-1.5 1c-1.3.3-1.5 2.3-1.5 2.3s-.6-.2-.5 1.3c-.8-.2-.6-.8-2-.8s-2.7.2-1.8 1.8c1.5.2 3.3 2.8 3.3 2.8s3.9-.1 4.9 1 2.2 1 2.3 2.6c2.6.6 3.8 1 3.8 1s.4.3-.4 1.7zm3.6-22.5c-2 .7-2 .8-2 .8s-.7.1-1 .8c-.3.7-1.3 1.6-2 .5s-1-2.2-.3-2.3c-.2-1.2-.6-2.3-1-3.1.2-.1.6-.1 1-.1 2.3 0 4.6.5 6.6 1.4 0 .1.5 1.4-1.3 2zm7.6 21.3s.6-1.8-.5-1.8c-3.3.3-4-.5-5.1-1.8-1.2-1.2-.1-3.5.8-3.8.9-.4 1.1-1.2 1.5-1.8.4-.5 4.1-.8 4.1-.8.8.4.8 1.5 1.8 2.3.1.1.3.2.4.2-.2 2.9-1.2 5.6-2.7 7.8-.1-.2-.3-.3-.3-.3z"></path></g></svg></div></div></div>
      العربية
      <div className="ColoredIcon__IconWrapper-mnpnc5-0 heCbmI ColoredIcon gem-type-one-more-arrow" style="height: 20px; width: 20px; background-color: transparent; transform: rotate(45deg);"><div classNam="ColoredIcon__IconBackground-mnpnc5-1 wlliz ColoredIcon__background gem-icon" style="height: 20px; width: 20px; background-color: transparent; transform: rotate(45deg);"><div class="ColoredIcon__IconHolder-mnpnc5-2 eDqktR ColoredIcon__holder" style="font-size: 10px; line-height: 10px; height: 10px; width: 10px;"><svg viewBox="0 0 36 36" class="ColoredIcon__IconBody-mnpnc5-3 huSBZa ColoredIcon__element ColoredIcon__element--svg" style="font-size: 10px; line-height: 10px; height: 10px; width: 10px;"><g><path class="st0" d="M27.5 16.5C27.3 16.3 13 .8 13 .8a2.84 2.84 0 00-4 0 2.84 2.84 0 000 4l12.4 13.7L9 31.1a2.84 2.84 0 000 4c1.1 1.1 2.9 1.1 4 0l14.5-14.3c.6-.6.9-1.4.8-2.2.1-.7-.2-1.5-.8-2.1z"></path></g></svg></div></div></div>
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
