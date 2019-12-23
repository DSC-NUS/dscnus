import React from 'react';
import { Icon } from "semantic-ui-react";
import logo from '../assets/Footer/dscnusfulllogo.png';

const Footer = () => (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="Logo" className="footer__logo" />
            </div>
            <div className="footer__content">
                <div className="footer__left">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="/about" className="footer__link">About Us</a></li>
                            <li className="footer__item"><a href="/team" className="footer__link">Our Core Team</a></li>
                            <li className="footer__item"><a href="/projects" className="footer__link">Our Projects</a></li>
                            <li className="footer__item"><a href="/blog" className="footer__link">Blog</a></li>
                            <li className="footer__item"><a href="/contact" className="footer__link">Contact Us</a></li>
                        </ul>
                    </div>
                    <p className="footer__disclaimer">
                        Disclaimer: DSC NUS is an independent group; the activities and opinions expressed by the group should in no way be linked to Google, the corporation.
                    </p>
                </div>
                <div className="footer__right">
                    <div className='footer__socialmedia-menu'>
                        <a href="http://www.instagram.com/dscnus" target="_blank" rel="noopener noreferrer" className="footer__link">
                            <Icon name='instagram' link size='huge' />
                        </a>
                        <a href="http://www.linkedin.com/company/dscnus" target="_blank" rel="noopener noreferrer" className="footer__link">
                            <Icon name='linkedin' link size='huge' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
);

export default Footer;
