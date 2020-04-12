import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';

class HackathonTeamsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {<PageHeader/>}
                <div className="notfound">
                    <h1>
                        <span className="heading-secondary notfound__span">Coming Soon</span>
                        <span className="heading-tertiary notfound__span">Look out for this page next time!</span>    
                    </h1><br/>
                    <Divider hidden />
                    <a href="/" className="btn btn-yellow">Go to Homepage</a>
                </div>
                {<Footer/>}
            </div>
        );
    }
}

export default HackathonTeamsPage;