import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';

class NotFoundPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                {<PageHeader />}
                <div className="notfound">
                    <h1>
                        <span className="heading-secondary notfound__span">Oh No...</span>
                        <span className="heading-tertiary notfound__span">Page Not Found</span>
                    </h1><br />
                    <Divider hidden />
                    <a href="/" className="btn btn-yellow">Go to Homepage</a>
                </div>
                {<Footer />}
            </div>
        );
    }
}

export default NotFoundPage;