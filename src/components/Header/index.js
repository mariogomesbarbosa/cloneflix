import React from "react"
import './Header.css'

export default ({dark}) => {
  return (
    <header className={dark ? 'dark' : ''}>
      <div className="header-logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Usuário" />
        </a>
      </div>
    </header>
  )
}