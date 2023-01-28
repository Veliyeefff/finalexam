import React from 'react'
import './Footer.scss'
function Footer() {
    return (
        <div id='footer'>
            <div className="footer-text">
                <p>Copyright ©2023 All rights reserved | This template is made with <i className="fa-regular fa-heart"></i>  by <span>Colorlib</span></p>
            </div>
            <div className="footer-links">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-solid fa-basketball"></i>
                <i className="fa-brands fa-behance"></i>
            </div>
        </div>
    )
}

export default Footer