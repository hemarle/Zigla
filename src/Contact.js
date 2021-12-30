import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className='contact'>
            <h4> Contact Us</h4>
        <h2> Get in Touch</h2>
        
        <form action="">
            <input type="text" name="name" id="name" placeholder='Name'/>
        <input type="email" name="email" placeholder='Email' id="Email" />
    <textarea name="Message" id="message" cols="30" rows="10" placeholder='Message' />
       <input className='button' type="submit" value="Send Message" />
        </form>
        </div>
    )
}

export default Contact
