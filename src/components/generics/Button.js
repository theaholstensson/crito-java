import React from 'react'

const Button = ({type, url, title}) => {

    const getButtonClassName = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow'
            case 'transparent':
                return 'btn-transparent'
            case 'black':
                return 'btn-black'
        }
    }

  return (
    <a className={getButtonClassName()} href={url}>{title} <i className="fa-solid fa-arrow-up-right"></i></a>
  )
}

export default Button