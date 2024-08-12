import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContainer,NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

 export default function Contactres({buttonres}) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const showNotify=()=>{
   NotificationManager.success('Message sent successfully!')
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      user_email: email,
      message: message + " from this email - " + email,
    };

    emailjs.send('service_mk6gwgd', 'template_z5djnlh', templateParams, 'y3trjdXSeLWj_hckY')
      .then((response) => {
        setEmail('');
        setMessage('')
        console.log(email);
        // NotificationManager.success('Message sent successfully!')
        showNotify();
      }, (error) => {
        NotificationManager.error('Failed to sent massage');
      });
  };

  return (
    <div className= {`contact-form ${buttonres}`}>
      <form onSubmit={handleSubmit} className="email-form">
        <h2>Contact Me</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder='Enter your E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder='Write your Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required />
        <button type="submit">Send</button>
      </form>
      <NotificationContainer/>
    </div>
  );
}


