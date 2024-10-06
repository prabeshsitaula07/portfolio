import React from 'react'
import '../../css/footer.css'
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="login">
                <a href="https://github.com/prabeshsitaula07"><img src="footer-icon/github.png" alt="github icon" /></a>
                    <a href="https://www.linkedin.com/in/prabesh-sitaula/"><img src="footer-icon/linkedin.png" alt="linkedin icon" /></a>
                    <a href="https://twitter.com/prabesh_sitaula"><img src="footer-icon/twitter.png" alt="twitter icon" /></a>
                    <a href="https://www.instagram.com/prabesh.sitaula_07"><img src="footer-icon/instagram.png" alt="instagram icon" /></a>
                </div>

                <div className="contact-flex">
                    <div className="contact-detail">
                        <h4>9848589357</h4>
                        <h4>sitaulaprabesh07@gmail.com</h4>
                        <h4>Balaju, Kathmandu</h4>
                    </div>
                    <div className="copy">
                        <h4 align="center">2024 all rights reserved &copy; |PRABESH SITAULA|</h4>
                    </div>
                </div>
            </footer>
        </>
    )
}
