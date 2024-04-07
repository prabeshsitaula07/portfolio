import React from 'react'

export default function Contact() {
  return (
    <>
    <section className="contact" id="contact">
                <div className="container">
                    <h2 align="center">Contact me</h2>
                    <form action="/submit" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
    </>
  )
}
