import React, { Component } from 'react';
import moment from 'moment';
import { Message } from 'semantic-ui-react';
import ReactLoading from 'react-loading';
import ArticleCard from './ArticleCard';
import PageHeader from './PageHeader';
import Footer from './Footer';
import teamarticledata from '../data/teamarticledata';

class BlogPage extends Component {
    state = {
        articles: undefined,
        error: undefined,
        filtered: undefined,
        loading: true
    }

    componentDidMount() {
        this.handleChange = this.handleChange.bind(this);
        window.scrollTo(0, 0)
        this.setState({
            loading: false
        })
    }

    handleChange(e) {
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
                        {!this.state.loading && teamarticledata.teams.map((team, index) => (
                            <ArticleCard
                                cardLink={team.cardLink}
                                key={index}
                                imageLink={team.imageLink}
                                title={team.title}
                                date={moment(new Date(team.createdAt)).fromNow()}
                                content={team.content}
                            />
                        ))}

                        {this.state.loading && (
                            <ReactLoading type={"bars"} color={"#06c1d0"} style={{ margin: 'auto', width: '30%' }} />
                        )}
                        {/* {!!!this.state.articles && !this.state.error && !this.state.loading && (
                            <Message info>
                                There are no articles at the moment!
                            </Message>
                        )} */}
                        {this.state.error && !this.state.loading && (
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
                                    {!this.state.loading &&
                                        (
                                            <div>
                                                <li className="blog__list-item"><a href='/externalteamA'>External Team A</a></li>
                                                <li className="blog__list-item"><a href='/externalteamB'>External Team B</a></li>
                                                <li className="blog__list-item"><a href='/externalteamC'>External Team C</a></li>
                                            </div>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* <div className="card">
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
                        </div> */}
                    </div>
                </div>
                {<Footer />}
            </div>
        )
    }
}

export default BlogPage;