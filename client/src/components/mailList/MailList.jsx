import React from 'react'
import './mailList.css'

export const MailList = () => {
    return (
        <div className="mail">
            <div className="mailTitle">Save time, save money!</div>
            <span className="mailDescription">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
