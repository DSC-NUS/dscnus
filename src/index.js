import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import ArticlePage from './components/ArticlePage'
import HomePage from './components/HomePage'
import TeamPage from './components/TeamPage'
import AboutUsPage from './components/AboutUsPage'
import ProjectsPage from './components/ProjectsPage'
import PostPage from './components/PostPage'
import ContactPage from './components/ContactPage'
import BlogPage from './components/BlogPage'
import ComingSoonPage from './components/ComingSoonPage'
import NotFoundPage from './components/NotFoundPage'
import HackForGoodPage from './components/HackForGoodPage'
// import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

const App = ({ base }) => (
    <BrowserRouter basename={base}>
        <div className="outer_div">
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/about" component={AboutUsPage} />
                <Route path="/team" component={TeamPage} />
                <Route path="/post" component={PostPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/blog/:id" component={ArticlePage} />
                <Route path="/blog" component={ComingSoonPage}/>
                <Route path="/hackforgood" component={HackForGoodPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
