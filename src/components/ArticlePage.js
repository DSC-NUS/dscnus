import React, { Component } from 'react';
import {  } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';

class ArticlePage extends Component {
    state = {
        title: undefined,
        body: undefined,
        createdAt: undefined,
        error: undefined
    }

    componentDidMount() {
        fetch(`http://localhost:3000/articles/${this.props.match.params.id}`, {
            method: "GET"
        }).then(response => response.json()
        ).then((response) => {
            console.log(response)
            if (response.constructor === Array) {
                this.setState({ ...response, error: false })
            }
        }).catch((error) => {
            this.setState({ error: true })
            // console.log('error1: ' + this.state.error)
        })
    }

    render() {
        return (
            <div>
                {<PageHeader/>}
                <div>
                    {this.props.match.params.id}
                </div>
                {<Footer/>}
            </div>
        );
    }
}

export default ArticlePage;