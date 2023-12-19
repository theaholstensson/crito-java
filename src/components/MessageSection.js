import React from 'react'

const MessageSection = () => {
  return (
    <section class="leave-us-a-message">
        <div class="container">
            <h1>Leave us a message for any information</h1>
            <form action="">
                <input type="text" id="name" placeholder="Name*" />
                <input type="text" id="email" placeholder="Email*" />
                <textarea name="subject" id="message" placeholder="Your Message*"></textarea>
                <a class="btn-yellow" href="">Send message<i class="fa-regular fa-arrow-up-right"></i></a>
            </form>
        </div>
    </section>
  )
}

export default MessageSection