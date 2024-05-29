import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusve Offers On your Email</h1>
        <p>Subscribe to our newsletter and stay upload</p>
        <div>
            <input type="email" placeholder='your email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
