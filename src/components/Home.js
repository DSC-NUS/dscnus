import React, { Component } from 'react';
import { Button, Header, Divider } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';
import PageHeader from './PageHeader.js';
//import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                {<PageHeader />}
                Home page
            </div>
        )
    }
}

export default Home;