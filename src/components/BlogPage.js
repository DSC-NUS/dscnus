import React, { Component } from 'react';
import { Icon, Message } from 'semantic-ui-react';
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
            } else {
                this.setState({ ...response })
            }
        }).catch((error) => {
            this.setState({ error })
            console.log('error: ' + error)
        })
    }

    fetchRecents = () => {
        fetch("http://localhost:3000/articles?sortBy=created_at:desc", {
            method: "GET"
        }).then(response => response.json()
        ).then((response) => {
            console.log(response)
            if (response.constructor === Array) {
                this.setState({ recents: response })
            }
        }).catch((error) => {
            console.log('error: ' + error)
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
                    {this.state.articles && this.state.articles.constructor === Array && this.state.articles.map((article) => (
                        <div className="blog__card" key={article._id}>
                            <div className="blog__image-box">
                                <img src={logo} alt="event"/>
                            </div>
                            <div className="blog__card-content">
                                <h2>{article.title}</h2>
                                <p>{article.description}</p>
                            </div>
                        </div>
                    ))}
                    {!this.state.articles && !this.state.error && (
                        <Message info>
                        There are no articles at the moment!
                        </Message>
                    )}
                    {this.state.error && (
                        <Message error>
                        {this.state.error} Please try again later.
                        </Message>
                    )}
                    </div>

                    <div className="blog__sidebar">
                        <div className="blog__card">
                            <div className="blog__card-content">
                                <h2 className="heading-tertiary">Recent Posts</h2>
                                <ul className="blog__list">
                                    {this.state.recents && this.state.recents.constructor === Array && this.state.recents.map((recent) => (
                                        <li className="blog__list-item"><a href={`/${recent._id}`}>{recent.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="blog__card">
                            <div className="blog__card-content">
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