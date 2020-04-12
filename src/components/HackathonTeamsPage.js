import React, { Component } from 'react'
import PageHeader from './PageHeader'
import Footer from './Footer'
import hackathonteamsdata from '../data/hackathonteamsdata'
import g1p1 from '../assets/HackathonTeamsPage/g1p1.jpg';
import g2p1 from '../assets/HackathonTeamsPage/g2p1.jpg';
import g3p1 from '../assets/HackathonTeamsPage/g3p1.jpg';
import g4p1 from '../assets/HackathonTeamsPage/g4p1.jpg';
import g5p1 from '../assets/HackathonTeamsPage/g5p1.jpg';
import g6p1 from '../assets/HackathonTeamsPage/g6p1.jpg';
import g7p1 from '../assets/HackathonTeamsPage/g7p1.jpg';
import g8p1 from '../assets/HackathonTeamsPage/g8p1.jpg';
import g9p1 from '../assets/HackathonTeamsPage/g9p1.jpg';
import g10p1 from '../assets/HackathonTeamsPage/g10p1.jpg';

class HackathonTeamsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {<PageHeader/>}
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
                                            <img class="hackathon-teams__image" src={image}></img>
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
                {<Footer/>}
            </div>
        );
    }
}

export default HackathonTeamsPage;