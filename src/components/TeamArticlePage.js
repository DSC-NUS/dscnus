import React, { Component } from 'react';
import PageHeader from './PageHeader';
import moment from 'moment';
import teamarticledata from '../data/teamarticledata';
import TeamAArticleContent from './TeamAArticleContent';
import TeamBArticleContent from './TeamBArticleContent';
import TeamCArticleContent from './TeamCArticleContent';
import HackForGoodArticleContent from './HackForGoodArticleContent';

// const imagePath = require.context('../assets/TeamArticlePage/', true);

class TeamArticlePage extends Component {
    state = {}

    componentDidMount() {
        let teamData = teamarticledata.teams[this.props.team]
        this.setState({
            ...teamData
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <PageHeader />
                <div className="article">
                    <div className="article__header">
                        <h1 className="heading-secondary">{this.state.title}</h1>
                        <p>{moment(new Date(this.state.createdAt)).format("DD MMM YYYY")}</p>
                    </div>
                    <div className="team-article__content">
                        <div className="team-article__image-box">
                            <img src={this.state.horiImageLink} alt="event" />
                        </div>
                        <div className="article__text margin-bottom-small">
                            {
                                this.props.team === 0 && (
                                    <TeamAArticleContent />
                                )
                            }
                            {
                                this.props.team === 1 && (
                                    <TeamBArticleContent />
                                )
                            }
                            {
                                this.props.team === 2 && (
                                    <TeamCArticleContent />
                                )
                            }
                            {
                                this.props.team === 3 && (
                                    <HackForGoodArticleContent />
                                )
                            }
                        </div>
                        <div className="" className={this.state.deckLink ? '' : 'display-none'}>
                            <a href={this.state.deckLink} className="btn btn-yellow" target="_blank" rel="noopener noreferrer">Our Pitch Deck</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamArticlePage;