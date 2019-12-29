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
        fetch(`http://localhost:3001/articles/${this.props.match.params.id}`, {
            method: "GET"
        }).then(response => response.json()
        ).then((response) => {
            // console.log("r: ", response)
            this.setState({ ...response, error: false })
            // console.log("state: ", this.state)
        }).catch((error) => {
            this.setState({ error: true })
            // console.log('error1: ' + this.state.error)
        })
    }

    htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    render() {
        return (
            <div>
                {<PageHeader/>}
                <div className="article">
                    {/* {this.props.match.params.id} */}
                    <div className="article__header">
                        <h1 className="heading-secondary">{this.state.title}</h1>
                    </div>
                    <div className="article__content">
                        <div className="article__image-box">
                            <img src={event} alt="event"/>
                        </div>
                        {/* <h3 className="heading-tertiary">{this.state.title}</h3> */}
                        <div dangerouslySetInnerHTML={{__html: this.htmlDecode(this.state.body)}} />
                            {/* Kickstarting the DSC NUS journey with our first Core Team meeting held at the Google Developer Space on 26th September 2019.
                            Featuring: Bin Jie - External Lead
                            Upon arrival, we went straight to get changed into our DSC NUS Core Team shirts designed by our talented Head of Design, Yan San.
                            Not forgetting to pick up some tidbits from the snack bar before we start the meeting!
                            Featuring: Jin Wen - External Team B Head (left), Yan San - Head of Design (right) */}
                            {/* {this.state.body}
                        </div> */}
                    </div>
                </div>
                {<Footer/>}
            </div>
        );
    }
}

export default ArticlePage;