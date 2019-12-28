import React, { Component } from 'react';
import { Icon, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import Footer from './Footer';
import logo from '../assets/HomePage/event1.jpg';

class BlogPage extends Component {
    state = {
        error: undefined,
        articles: undefined,
        recents: undefined
    }

    fetchArticles = () => {
        fetch('http://localhost:3000/articles', {
            method: "GET"
        }).then(response => response.json()
        ).then((response) => {
            console.log(response)
            if (response.constructor === Array) {
                this.setState({ articles: response })
            }
        }).catch((error) => {
            this.setState({ error: true })
            // console.log('error1: ' + this.state.error)
        })
    }

    fetchRecents = () => {
        fetch("http://localhost:3000/articles?sortBy=created_at:desc", {
            method: "GET"
        }).then((response) => {
            console.log("r" + response)
            return response.json()
        }).then((response) => {
            console.log(response)
            if (response.constructor === Array) {
                this.setState({ recents: response })
            }
        }).catch((error) => {
            // if (error.length === 0) 
            //     this.setState({ error: true })
            this.setState({ error: true })
            // console.log('error2: ' + this.state.error)
        })
    }

    componentDidMount() {
        this.fetchArticles()
        this.fetchRecents()
    }

    render() {
        return (
            <div className="blog">
                {<PageHeader />}
                <div className="blog__header">
                    <h1 className="heading-secondary">We Engage and Impact Communities</h1>
                </div>

                <div className="blog__content">
                    <div className="blog__articles">
                    
                        {/* This is a template */}
                        <Link className="card card--clickable blog__article" to="/blog/123">
                            <div className="card__image-box">
                                <img src={logo} alt="event"/>
                            </div>
                            <div className="card__content">
                                <h2>Title</h2>
                                <p>Description</p>
                            </div>
                        </Link>
                        <Link className="card card--clickable blog__article" to="/blog/123">
                            <div className="card__image-box">
                                <img src={logo} alt="event"/>
                            </div>
                            <div className="card__content">
                                <h2>Title</h2>
                                <p>Description</p>
                            </div>
                        </Link>
                        {/* End of template */}

                        {!!this.state.articles && this.state.articles.constructor === Array && this.state.articles.map((article) => (
                            <Link className="card card--clickable blog__article" to={`/blog/${article._id}`} key={article._id}>
                                <div className="card__image-box">
                                    <img src={logo} alt="event"/>
                                </div>
                                <div className="card__content">
                                    <h2>{article.title}</h2>
                                    <p>{article.description}</p>
                                </div>
                            </Link>
                        ))}
                        {!!!this.state.articles && !this.state.error && (
                            <Message info>
                            There are no articles at the moment!
                            </Message>
                        )}
                        {this.state.error && (
                            <Message error>
                            There was an error. Please try again later!
                            </Message>
                        )}
                    </div>

                    <div className="blog__sidebar">
                        <div className="card blog__article">
                            <div className="card__content">
                                <h2 className="heading-tertiary">Recent Posts</h2>
                                <ul className="blog__list">
                                    <li className="blog__list-item"><a href='blog/123'>Title</a></li>
                                    <li className="blog__list-item"><a href='/blog/123'>Title</a></li>
                                    {this.state.recents && this.state.recents.constructor === Array && this.state.recents.map((recent) => (
                                        <li className="blog__list-item"><a href={`/blog/${recent._id}`}>{recent.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__content">
                                <div className="search">
                                    <h2 className="heading-tertiary">Search</h2>
                                    <div className="search__box">
                                        <input type="text" className="search__input" placeholder="Search articles" />
                                        <button className="search__button">
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
        )
    }
}

export default BlogPage;