import React from 'react'
import twitter from '../images/TwitterIcon.png'
import facebook from '../images/FacebookIcon.png'
import insta from '../images/InstagramIcon.png'
import git from '../images/GitHubIcon.png'

function Footer() {
    return (
        <div className='footer'>
            <footer>
                <img src={twitter} alt="icon" />
                <img src={facebook} alt="icon" />
                <img src={insta} alt="icon" />
                <img src={git} alt="icon" />
            </footer>
        </div>
    )
}

export default Footer