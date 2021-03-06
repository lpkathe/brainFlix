import React from 'react';
import logo from '../../assets/logo/Logo-brainflix.svg'
import UserPic from '../../assets/images/Mohan-muruge.jpg'
import './Header.scss'

function Header() {
  return (
    <header className="header" >
      <div className="header--logo">
        <img src={logo} alt="logo graphic" />
      </div>
      <div className="header__search">
        <input className="header__search--input" placeholder="Search" />
        <div>
          <button className="header__search--button" onClick={() => {}}>+ UPLOAD</button>
          <img className="header__search--image" src={UserPic} alt="User Pic"/>
        </div>
      </div>
    </header>
  )
}
export default Header;