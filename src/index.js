import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import ArticlePage from './components/ArticlePage'
import HomePage from './components/HomePage'
import TeamPage from './components/TeamPage'
import AboutUsPage from './components/AboutUsPage'
import ProjectsPage from './components/ProjectsPage'
import WorkshopsPage from './components/WorkshopsPage'
import PostPage from './components/PostPage'
import ContactPage from './components/ContactPage'
import BlogPage from './components/BlogPage'
import NotFoundPage from './components/NotFoundPage'
import TeamArticlePage from './components/TeamArticlePage'
import HackathonTeamsPage from './components/HackathonTeamsPage'
import RecruitmentPage from './components/RecruitmentPage'
import { Router, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

ReactGA.initialize("UA-147601557-4");

const history = createBrowserHistory();

history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Router history={history}>
                <div className="outer_div">
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/about" component={AboutUsPage} />
                        <Route path="/team" component={TeamPage} />
                        <Route path="/post" component={PostPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/projects" component={ProjectsPage} />
                        <Route path="/workshops" component={WorkshopsPage} />
                        <Route path="/blog/:id" component={ArticlePage} />
                        <Route path="/blog" component={BlogPage} exact={true} />
                        <Route path="/externalteamA" render={() => <TeamArticlePage team={0} key={1} />} />
                        <Route path="/externalteamB" render={() => <TeamArticlePage team={1} key={2} />} />
                        <Route path="/externalteamC" render={() => <TeamArticlePage team={2} key={3} />} />
                        <Route path="/hackforgood2020" render={() => <TeamArticlePage team={3} key={4} />} />
                        <Route path="/hackathon-teams" component={HackathonTeamsPage} />
                        <Route path="/recruitment" component={RecruitmentPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
