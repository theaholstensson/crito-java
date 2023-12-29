import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MessageSection = () => {
  const [name, setName] = useState ('')
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [thankYouMessage, setThankYouMessage] = useState('')

  const handleChange = (e) => {
    switch (e.target.value) {
      case 'name':
        setName(e.target.value)
        setNameError(validateLength(e.target.value))
        break
      case 'email':
        setEmail(e.target.value)
        setEmailError(validateLength(e.target.value, 3))
        break
      case 'message':
        setMessage(e.target.value)
        setMessageError(validateLength(e.target.value))
        break
    }
  }

  const validateLength = (value, minLength = 1) => {
    if (value.length < minLength)
      return true
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setThankYouMessage('')

    for(let element of e.target) {
      switch (element.name) {
        case 'name':
          setName(element.value)
          setNameError(validateLength(element.value))
          break
        case 'email':
          setEmail(element.value)
          setEmailError(validateLength(element.value))
          break
        case 'message':
          setMessage(element.value)
          setMessageError(validateLength(element.value))
          break
      }
    }

    if (!nameError || !emailError || !messageError) {
      const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          name, email, message
        })
      })

      if (result.status === 200)
        setThankYouMessage('Thank you for your message!')
      else
      setErrorMessage('Something went wrong')

    }
  }

  const clearForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }


  return (
    <section className="leave-us-a-message">
        <div className="container">
            <h1>Leave us a message for any information</h1>
            <p className="errorMessage">{errorMessage}</p>
            <p className="thankYouMessage">{thankYouMessage}</p>
            <form noValidate onSubmit={handleSubmit}>
                <input type="text" id="name" className={`${nameError ? 'error' : ''}`} placeholder={`Namn* ${nameError ? '' : ''}`} value={name} onChange={(e) => handleChange(e)} />
                <input type="text" id="email" placeholder="Email*" value={email} onChange={(e) => handleChange(e)} />
                <textarea name="subject" id="message" placeholder="Your Message*" value={message} onChange={(e) => handleChange(e)} ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default MessageSection