import React from 'react';
import { } from 'semantic-ui-react';
import PageHeader from './PageHeader';

const TeamPage = () => (
    <div>
        {<PageHeader/>}
        <header class="about-header">
            <div class="about-header__text-box">
                <h1 class="about-heading-primary">
                    <span class="about-heading-primary--main">Our Core Team</span>
                </h1>
            </div>
        </header>
    </div>
);

export default TeamPage;