import "./FooterStyles.css"

import React from 'react'
import { FaHome,FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer =() => {
    return (
        <div className ="footer">
            <div className = "footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={
                            {color:"#fff",marginRight: "2rem"}}/>
                        <div>
                            <p>V-477 ghonda Delhi-53.</p>
                            <p>India.</p>
                        </div>    
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:
                        "#fff", marginRight: "2rem" }} />
                        9654805032</h4>  
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:
                        "#fff", marginRight: "2rem" }} />
                        ayushm23y@gmail.com</h4>  
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>This is me Ayush. Student in Delhi
                        Technological University. I enjoy
                        coding and designing new projects.
                    </p>
                    <div className ="social">
                        <FaFacebook
                        size={30}
                        style={{color: "#fff",
                            marginRight: "1rem"}}/>
                        <FaTwitter
                        size={30}
                        style={{color: "#fff",
                            marginRight: "1rem"}}/>
                        <FaLinkedin
                        size={30}
                        style={{color: "#fff",
                            marginRight: "1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer