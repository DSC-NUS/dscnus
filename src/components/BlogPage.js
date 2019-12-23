import React from 'react';
import { Icon } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import logo from '../assets/HomePage/event1.jpg';

const BlogPage = () => (
    <div className="blog">
        {<PageHeader />}
        <div className="blog__header">
            <h1 className="heading-secondary">We Engage and Impact Communities</h1>
        </div>

        <div className="blog__content">
            <div className="blog__articles">
                <div className="blog__card">
                    <div className="blog__image-box">
                        <img src={logo} alt="event"/>
                    </div>
                    <div className="blog__card-content">
                        <h2>Event 1</h2>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__image-box">
                        <img src={logo} alt="event"/>
                    </div>
                    <div className="blog__card-content">
                        <h2>Event 2</h2>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
            </div>
            <div class="blog__sidebar">
                <div className="blog__card">
                    <div className="blog__card-content">
                        <h2 className="heading-tertiary">Recent Posts</h2>
                        <ul className="blog__list">
                            <li className="blog__list-item">DSC Southeast Asia Summit</li>
                            <li className="blog__list-item">DSC Launch Party</li>
                            <li className="blog__list-item">DSC Southeast Asia Summit</li>
                            <li className="blog__list-item">DSC Launch Party</li>
                            <li className="blog__list-item">DSC Southeast Asia Summit</li>
                            <li className="blog__list-item">DSC Launch Party</li>
                        </ul>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__card-content">
                        <div className="search">
                            <h2 className="heading-tertiary">Search</h2>
                            <div class="search__box">
                                <input type="text" className="search__input" placeholder="Search hotels" />
                                <button class="search__button">
                                    <Icon name="search" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {<Footer/>}
    </div>
);

export default BlogPage;