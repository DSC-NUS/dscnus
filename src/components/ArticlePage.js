import React, { Component } from 'react';
import {  } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import event from '../assets/HomePage/event1.jpg';

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
                <div className="article">
                    {/* {this.props.match.params.id} */}
                    <div className="article__header">
                        <h1 className="heading-secondary">DSC NUS Launch at Google</h1>
                    </div>
                    <div className="article__content">
                        <div className="article__image-box">
                            <img src={event} alt="event"/>
                        </div>
                        <h3 className="heading-tertiary">First Meeting</h3>
                        <p>
                            Kickstarting the DSC NUS journey with our first Core Team meeting held at the Google Developer Space on 26th September 2019.
                            Featuring: Bin Jie - External Lead
                            Upon arrival, we went straight to get changed into our DSC NUS Core Team shirts designed by our talented Head of Design, Yan San.
                            Not forgetting to pick up some tidbits from the snack bar before we start the meeting!
                            Featuring: Jin Wen - External Team B Head (left), Yan San - Head of Design (right)
                        </p>
                        <h3 className="heading-tertiary">Introduction</h3>
                        <p>
                            Next, we jumped straight into introductions by the Lead (Jason), Internal Lead (Shawn) and External Lead (Bin Jie). 
                            The Core Team was also exposed to some of the initiatives being organised by DSCs in other universities all around the globe. 
                            Featuring: Shawn - Internal Lead
                        </p>
                    </div>
                </div>
                {<Footer/>}
            </div>
        );
    }
}

export default ArticlePage;