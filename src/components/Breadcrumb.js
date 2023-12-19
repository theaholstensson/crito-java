import React from 'react'

const Breadcrumb = () => {
  return (
    <section className="breadcrumb">
        <img className="background-lines" src="/images/background-lines.svg" alt="White curvy lines" />
        <nav>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
        </nav>
        <h1>Let's connect</h1>
    </section>
  )
}

export default Breadcrumb