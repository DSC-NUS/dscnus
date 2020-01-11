import React, { Component } from 'react'
import axios from 'axios'
import { Message } from 'semantic-ui-react'
import PageHeader from './PageHeader'
import Footer from './Footer'
import constants from '../data/constants'

class PostPage extends Component {
    state = {
        title: '',
        body: '',
        description: '',
        password: '',
        error: false,
        success: false
    }

    constructor(props) {
        super(props)
        this.state = {
            picture: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log("e: " + e)

        axios({
            method: 'post',
            url: constants["backend-url"] + '/articles',
            // url: 'http://localhost:3001/articles',
            data: {
              ...this.state
            }
        })
        .then(response => { 
            if (response.status === 201) {
                this.setState({
                    error: false,
                    success: true,
                    title: '',
                    body: '',
                    description: '',
                    password: ''
                });
                const data = new FormData()
                data.append('picture', this.state.picture)
                return axios.post(constants["backend-url"] + `/articles/${response.data.id}/picture`, data, {
                // return axios.post(`http://localhost:3001/articles/${response.data.id}/picture`, data, { 
                    // receive two    parameter endpoint url ,form data
                })
            } else {
                this.setState({
                    error: true
                })
            }
        })
        .then(response => { // then print response status
            if (response.status === 201) {
                this.setState({
                    picture: null
                })
            } else {
                this.setState({
                    error: true
                })
            }
        })
        .catch(error => {
            console.log(error)
            this.setState({
                error: true
            });
        })
    }

    onTitleChange = (e) => {
        this.setState({ title: e.target.value});
    }

    onFileChange = (e) => {
        this.setState({
            picture: e.target.files[0],
            loaded: 0,
          })
    }

    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value});
    }

    onBodyChange = (e) => {
        this.setState({ body: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value});
    }

    render() {
        return (
            <div>
                {<PageHeader/>}
                <div className="blog__header">
                    <h1 className="heading-secondary">Post An Article</h1>
                </div>
                <div className="contact__content">
                    <form className="contact__form" onSubmit={(event) => this.handleSubmit(event)}>
                        <h2 className="heading-tertiary">Post An Article</h2>
                        <p className="subheading contact__form-header">Please fill out the form to post an article</p>
                        <label for="title">Title</label>
                        <input 
                            type="text" 
                            className="contact__form-input" 
                            placeholder="Article title"
                            name="title"
                            value={this.state.title} 
                            onChange={this.onTitleChange}
                        />
                        <label for="description">Description</label>
                        <input 
                            type="text" 
                            className="contact__form-input" 
                            placeholder="A brief description of your article"
                            name="description"
                            value={this.state.description} 
                            onChange={this.onDescriptionChange}
                        />
                        <label for="body">Body</label>
                        <textarea 
                            type="text" 
                            cols="40" rows="5"
                            className="contact__form-input contact__form-textarea" 
                            placeholder="The main content of your article, in html code e.g. <p>This is an example...</p>"
                            name="body"
                            required
                            value={this.state.body} 
                            onChange={this.onBodyChange}
                        />
                        <label className="custom-file-label" htmlFor="fileupload">
                            Choose Image
                        </label>
                        <input
                            type="file"
                            className="contact__form-file"
                            id="fileupload"
                            aria-describedby="inputGroupFileAddon01"
                            onChange={this.onFileChange}
                        />
                        <label for="Message">Password</label>
                        <input 
                            type="password" 
                            className="contact__form-input" 
                            placeholder="You must be authenticated to post"
                            name="password"
                            value={this.state.password} 
                            onChange={this.onPasswordChange}
                        />
                        <button className="btn btn-inline" type="submit">Submit</button>
                        {this.state.error && (
                            <Message error header="Error" className="message" content="An error has occurred. Please try again later!"/>
                        )}
                        {this.state.success && (
                            <Message success header="Success" className="message" content="Your article has been posted!"/>
                        )}
                    </form>
                </div>
                {<Footer/>}
            </div>
        );
    }
}

export default PostPage;