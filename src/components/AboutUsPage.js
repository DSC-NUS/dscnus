import React from 'react';
import { } from 'semantic-ui-react';
import PageHeader from './PageHeader';

const AboutUsPage = () => (
    <div>
        {<PageHeader/>}
        <header class="about-header">
            <div class="about-header__text-box">
                <h1 class="about-heading-primary">
                    <span class="about-heading-primary--main">About DSC NUS</span>
                    <span class="about-heading-primary--sub">Our mission</span>
                </h1>
            </div>
        </header>
    </div>
);

export default AboutUsPage;