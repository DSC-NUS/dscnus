import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const NotFoundPage = () => (
    <div>
        {<PageHeader/>}
        <Container text>
            Page Not Found<br/>
            <Divider hidden />
            <Link to="/">Go to Homepage</Link>
        </Container>
    </div>
);

export default NotFoundPage;