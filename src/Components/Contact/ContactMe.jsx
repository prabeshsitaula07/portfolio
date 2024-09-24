import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../css/style.css';

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
      .sendForm('service_vrtjfj6', 'template_o9uj9u8', form.current, {
        publicKey: '75C_7BI3HhFk7qKdL',
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
        <div className="fixed top-[80px] left-1/2 right-0 bg-green-500 text-white p-4 text-center font-semibold z-10 w-fit">
          Message sent successfully!
        </div>
      )}

      {/* Top notification for failure */}
      {messageStatus === 'failed' && (
        <div className="fixed top-[80px] left-1/2 right-0 bg-red-500 text-white p-4 text-center font-semibold z-10 w-fit">
          Failed to send the message. Please try again.
        </div>
      )}

      <h2 align="center" className='font-bold'><span className='violet'>Contact</span> Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto p-6 bg-transparent rounded-lg shadow-md space-y-6"
      >
        <div>
          <label className="block text-md font-semibold violet text-start">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            value={formData.user_name}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-md font-semibold violet text-start">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={formData.user_email}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-md font-semibold violet text-start">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <input
            type="submit"
            value="Send"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none cursor-pointer"
          />
        </div>
      </form>
    </>
  );
};
