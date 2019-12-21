import React from 'react';
import { Image, Divider } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import logo from '../assets/HomePage/event1.jpg';

const BlogPage = () => (
    <div className="blog">
        {<PageHeader />}
        <div className="blog__header">
            <h1 className="heading-secondary">Our Blog</h1>
        </div>
        <div className="blog__content">
            <div class="row">
                <div class="lcol-3">
                    <div className="blog__card">
                        <div className="blog__imagebox">
                            <img src={logo} alt="event"/>
                        </div>
                        <div className="blog__text-box">
                            <h2>Event 1</h2>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    <Divider />
                    <div className="blog__card">
                        <div className="blog__imagebox">
                            <img src={logo} alt="event"/>
                        </div>
                        <div className="blog__text-box">
                            <h2>Event 2</h2>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </div>
                <div class="rcol-1">
                    <div class="card">
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </div>
                </div>
            </div>
        </div>
        {<Footer/>}
    </div>
);

export default BlogPage;