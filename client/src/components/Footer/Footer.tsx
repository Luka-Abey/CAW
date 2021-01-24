import React from 'react';

const Footer: React.FC = () => (
    <div className="footer-basic">
        <footer>    
            <div className="social">
                <a href="https://www.facebook.com/CommunityActionWaste" target="_blank">
                    <i className="fab fa-facebook-f" />
                </a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="/submission">Submit An Idea</a></li>
                <li className="list-inline-item"><a href="/feedback">Submitted Ideas</a></li>
            </ul>
            <p className="contact-us">Contact Us:</p>

            <ul className="list-inline">
                {/* <li className="list-inline-item">Phone Lily: 07498577571</li> */}
                <li className="list-inline-item">Email: communityactionwaste@gmail.com</li>
            </ul>
            <p className="copyright">Community Action On Waste © 2021</p>
        </footer>
    </div>
);

export default Footer;
