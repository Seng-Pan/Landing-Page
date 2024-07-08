import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Landing.css"
 import logo from "../assets/logo.png"

function Landing() {
  return (

    <div>

      <section>
        <header>
          <div class='logo-container'>
            <img src={logo} alt="Logo"></img>
          </div>
          <div class="navigation">
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Info</a>
            <a href='#'>Services</a>
            <a href='#'>Contact</a>
          </div>
        </header>

        <div class="content">
          <div class="info">
            <h2>Recyglo <br /><span>Waste Management</span></h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <a href='#' class="info-btn">Sign in</a>
          </div>
        </div>

        <div class="media-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </section>

    </div>

  )
}

export default Landing

