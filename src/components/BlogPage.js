import React, { Component } from 'react';
import moment from 'moment';
import path from 'path';
import { Icon, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import Footer from './Footer';
import logo from '../assets/HomePage/event1.jpg';
import constants from '../data/constants';

class BlogPage extends Component {
    state = {
        error: undefined,
        articles: undefined,
        recents: undefined,
        filtered: undefined
    }

    fetchArticles = () => {
        fetch(path.join(constants["backend-url"], 'articles'), {
            method: "GET"
        }).then(response => response.json()
        ).then((response) => {
            if (response.constructor === Array) {
                this.setState({ articles: response, filtered: response })
            }
        }).catch((error) => {
            this.setState({ error: true })
            // console.log('error1: ' + this.state.error)
        })
    }

    fetchRecents = () => {
        fetch(path.join(constants["backend-url"], 'articles?sortBy=created_at:desc'), {
            method: "GET"
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.constructor === Array) {
                this.setState({ recents: response })
            }
        }).catch((error) => {
            // if (error.length === 0) 
            //     this.setState({ error: true })
            this.setState({ error: true })
        })
    }

    componentDidMount() {
        this.fetchArticles()
        this.fetchRecents()
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // console.log("state " + this.state)
        let currentList = this.state.articles;
        let newList = [];
        if (e.target.value !== "") {
            newList = currentList.filter(item => {
                const lc = item.title.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.props.items;
        }
        this.setState({
            filtered: newList
        });
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

                        {!!this.state.filtered && this.state.filtered.constructor === Array && this.state.filtered.map((article) => (
                            <Link className="card card--clickable blog__article" to={`/blog/${article._id}`} key={article._id}>
                                <div className="card__image-box">
                                    <img src={logo} alt="event"/>
                                </div>
                                <div className="card__content">
                                    <h2>{article.title}</h2>
                                    <p className="subheading">{moment(new Date(article.createdAt)).fromNow()}</p>
                                    <p className="paragraph">{article.description}</p>
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
                                        <li className="blog__list-item" key={recent._id}><a href={`/blog/${recent._id}`}>{recent.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__content">
                                <div className="search">
                                    <h2 className="heading-tertiary">Search</h2>
                                    <div className="search__box">
                                        <input type="text" className="search__input" onChange={this.handleChange} placeholder="Search articles" />
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