import React from 'react';
import { Menu, Grid, Icon } from "semantic-ui-react";
import logo from '../assets/Footer/dscnusfulllogo.png';

const Footer = () => (
        <footer class="footer">
            <div class="footer__logo-box">
                <img src={logo} alt="Logo" class="footer__logo" />
            </div>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <div class="footer__navigation">
                            <ul class="footer__list">
                                <li class="footer__item"><a href="/about" class="footer__link">About Us</a></li>
                                <li class="footer__item"><a href="/team" class="footer__link">Our Core Team</a></li>
                                <li class="footer__item"><a href="/projects" class="footer__link">Our Projects</a></li>
                                <li class="footer__item"><a href="/blog" class="footer__link">Blog</a></li>
                                <li class="footer__item"><a href="/contact" class="footer__link">Contact Us</a></li>
                            </ul>
                        </div>
                        <p class="footer__disclaimer">
                            Disclaimer: DSC NUS is an independent group; the activities and opinions expressed by the group should in no way be linked to Google, the corporation.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='footer__socialmedia-menu'>
                            <a href="http://www.instagram.com/dscnus" target="_blank" rel="noopener noreferrer" className="footer__link">
                                <Icon name='instagram' link size='huge' />
                            </a>
                            <a href="http://www.linkedin.com/company/dscnus" target="_blank" rel="noopener noreferrer" className="footer__link">
                                <Icon name='linkedin' link size='huge' />
                            </a>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </footer>
);

export default Footer;
