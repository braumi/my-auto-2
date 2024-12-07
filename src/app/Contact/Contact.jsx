import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <div className="contact-wrapper">
            <p>Phone Number:</p>
            <input type="text" />
            <p>Email:</p>
            <input type="text" />
            <p>Message:</p>
            <textarea></textarea>
            <button>Submit</button>
        </div>
        <div className="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.6968024976654!2d44.73261709999999!3d41.727061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730f2ad2dce5%3A0x826f14e8d390d76d!2sMY.GE!5e0!3m2!1ska!2sge!4v1733579069578!5m2!1ska!2sge" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
