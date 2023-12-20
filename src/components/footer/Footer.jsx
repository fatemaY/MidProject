import './footer.css'
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCopyright } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='footerContainer'>
            <div className="footerWrapper">

                <div className="socialMedia">
                    <div>
                        <p> <a href='https://www.linkedin.com/in/fatema-yasen-460b96213/' > <FaLinkedin size={30} /> </a> </p>
                        <p> <a href='https://www.facebook.com/fatemayas2' > <BsFacebook size={30} /> </a> </p>
                        <p> <a href='https://github.com/fatemaY' > <FaGithub size={30} /> </a> </p>
                    </div>
                </div>
                <div className="copyright">
                    <p> Copyright  {year} <AiOutlineCopyright /> 2023. All rights reserverd. Designed and Developed by-Fatema Yasen </p>
                </div>
            </div>
        </div>
    )
}

export default Footer