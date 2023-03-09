import "../assets/css/footer.css"
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="d-flex flex-column justify-content-center">
        <p>Hecho por Alex Fernández</p>
        <div className="link-icons">
          <a href="https://github.com/Arekkusu17"><i className="nes-icon github is-medium"></i></a>
          <a href="https://www.linkedin.com/in/alex-fernandez-varas/"><i className="nes-icon linkedin is-medium"></i></a>
        </div>
      </div>
    </footer>
  )
}
