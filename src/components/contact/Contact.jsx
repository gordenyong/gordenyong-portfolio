import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__socials">
          <div className="contact__social-link" >
          <i class="fa-regular fa-envelope"></i>
          </div>
          <h4 className='contact__type'>Email</h4>
          <h4 className='contact__details'>yongkunghee@hotmail.com</h4>
        </div>

        <div className="contact__socials">
          <div className="contact__social-link" >
          <i class="fa-brands fa-whatsapp"></i>
          </div>
          <h4 className='contact__type'>Whatsapp</h4>
          <h4 className='contact__details'>+6012-6880085</h4>
        </div>

        <div className="contact__socials">
          <a href="https://www.facebook.com/gordenyong.hee" className="contact__social-link">
          <i class="fa-brands fa-facebook-messenger"></i>
          </a>
          <h4 className='contact__type'>Messenger</h4>
          <h4 className='contact__details'>gordenyong.hee</h4>
        </div>
      </div>
    </section>
  )
}

export default Contact