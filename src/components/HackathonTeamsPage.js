import React, { Component } from 'react'
import PageHeader from './PageHeader'
import Footer from './Footer'
import hackathonteamsdata from '../data/hackathonteamsdata'

class HackathonTeamsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {<PageHeader />}
                {
                    hackathonteamsdata.teams.map((team, i) => {
                        return (
                            <div key={i}>
                                <div className="section-header section-blue">
                                    <h2 class="heading-secondary">
                                        Team {i + 1} - {team.name}
                                    </h2>
                                </div>
                                {team.images.map((image, i) => {
                                    return (
                                        <div className="hackathon-teams__image-box" key={i}>
                                            <img class="hackathon-teams__image" src={image} alt="team"></img>
                                        </div>
                                    )
                                })}
                                <div className="hackathon-teams__content">
                                    <p>{team.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
                {<Footer />}
            </div>
        );
    }
}

export default HackathonTeamsPage;