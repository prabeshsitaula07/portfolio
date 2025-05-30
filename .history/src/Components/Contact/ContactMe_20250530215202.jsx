import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactMe.css'; // Import the custom CSS file

export const ContactUs = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Basic validation
    const { user_name, user_email, message } = formData;
    return user_name && user_email && message; // Ensure all fields are filled
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessageStatus('failed'); // Show error if validation fails
      return;
    }

    emailjs
      .sendForm('', '', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          setMessageStatus('success');
          setFormData({ user_name: '', user_email: '', message: '' }); // Clear form fields

          // Clear success message after 3 seconds
          setTimeout(() => {
            setMessageStatus('');
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageStatus('failed');
        },
      );
  };

  return (
    <>
      {/* Top notification for success */}
      {messageStatus === 'success' && (
        <div className="notification success">
          Message sent successfully!
        </div>
      )}

      {/* Top notification for failure */}
      {messageStatus === 'failed' && (
        <div className="notification failure">
          Failed to send the message. Please try again.
        </div>
      )}

<div className="c" id='contact'>
      <h2 className="contact-title">Contact <span>Me</span></h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <div>
          <label className="form-label">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            value={formData.user_name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label className="form-label">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={formData.user_email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label className="form-label">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </div>

        <div>
          <input
            type="submit"
            value="Send"
            className="submit-button"
          />
        </div>
      </form>
      </div>
    </>
  );
};
