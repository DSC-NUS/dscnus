import React, { Component } from 'react';
import { Icon, Message } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import axios from 'axios';

class ContactPage extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        emailError: false,
        success: false,
        failure: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            this.setState({emailError: false});

        } else {
            return this.setState({emailError: true});
        } 

        // console.log("state: " + this.state)

        axios({
            method: 'post',
            url: 'http://localhost:3001/send',
            timeout: 3000, 
            data: {
              ...this.state
            }
        })
        .then(response => { 
            console.log("response: " + response)
            this.setState({
                success: true,
                failure: false,
                firstname: '',
                lastname: '',
                email: '',
                message: '',
            });
        })
        .catch(error => {
            console.error('timeout exceeded')
            this.setState({
                success: true,
                failure: false,
                firstname: '',
                lastname: '',
                email: '',
                message: '',
            });
        })

        // fetch('http://localhost:3001/send',{
        //     method: "POST",
        //     body: JSON.stringify(this.state),
        //     headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //     },
        // }).then(
        //     (response) => (response.json())
        // ).then((response) => {
        //     console.log("response: " + response)
        //     if (response.success === true){
        //         this.setState({
        //             success: true,
        //             failure: false,
        //             firstname: '',
        //             lastname: '',
        //             email: '',
        //             message: '',
        //         });
        //     } else if (response.status === 'fail') {
        //         this.setState({ failure: true, success: false });
        //     }
        // }).catch((e) => {
        //     this.setState({ failure: true, success: false })
        // })
    }
    

    onEmailChange = (e) => {
        this.setState({ email: e.target.value});
    }

    onFirstNameChange = (e) => {
        this.setState({ firstname: e.target.value});
    }

    onLastNameChange = (e) => {
        this.setState({ lastname: e.target.value});
    }

    onMessageChange = (e) => {
        this.setState({ message: e.target.value});
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                {<PageHeader />}
                <div className="contact__header">
                    <h1 className="heading-secondary">Let's stay connected!</h1>
                </div>
                <div className="contact__content">
                    <form className="contact__form" onSubmit={(event) => this.handleSubmit(event)}>
                        <h2 className="heading-tertiary">Contact Us</h2>
                        <p className="subheading contact__form-header">Please fill out the quick form and we'll get in touch with you shortly!</p>
                        <label for="firstname">First Name</label>
                        <input 
                            type="text" 
                            className="contact__form-input" 
                            placeholder="First name"
                            name="firstname"
                            value={this.state.firstname} 
                            onChange={this.onFirstNameChange}
                        />
                        <label for="lastname">Last Name</label>
                        <input 
                            type="text" 
                            className="contact__form-input" 
                            placeholder="Last name"
                            name="lastname"
                            value={this.state.lastname} 
                            onChange={this.onLastNameChange}
                        />
                        <label for="email">Email</label>
                        <input 
                            type="textarea" 
                            className="contact__form-input" 
                            placeholder="example@mail.com"
                            name="email"
                            value={this.state.email} 
                            onChange={this.onEmailChange}
                        />
                        <label for="Message">Your Message</label>
                        <textarea 
                            type="text" 
                            cols="40" rows="5"
                            className="contact__form-input contact__form-textarea" 
                            placeholder="Type here..."
                            name="message"
                            required
                            value={this.state.message} 
                            onChange={this.onMessageChange}
                        />
                        <button className="btn btn-inline" type="submit">Submit</button>
                        {this.state.emailError && (
                            <Message error header="Invalid Email" className="message" content="Please input a valid email."/>
                        )}
                        {this.state.failure && (
                            <Message error header="Failure" className="message" content="Failed to send. Please try again later!"/>
                        )}
                        {this.state.success && (
                            <Message success header="Success" className="message" content="Your message has been sent!"/>
                        )}
                    </form>
                    <div className="contact__alternatives">
                        <h2 className="contact__alternatives-heading">Other Ways To Connect</h2>
                        <p className="subheading">You can also contact us on these platforms</p>
                        <div className="contact__icons-box">
                            <a href="http://www.instagram.com/dscnus" target="_blank" rel="noopener noreferrer" className="footer__link contact__link">
                                <Icon name='instagram' link size='huge' />
                            </a>
                            <a href="http://www.linkedin.com/company/dscnus" target="_blank" rel="noopener noreferrer" className="footer__link contact__link">
                                <Icon name='linkedin' link size='huge' />
                            </a>
                        </div>
                        <ul className="contact__list">
                            <li className="contact__list-item">Partnerships: <a href="mailto:partnerships.head.dscnus@gmail.com">partnerships.head.dscnus@gmail.com</a></li>
                            <li className="contact__list-item">Recruitment: <a href="mailto:people.head.dscnus@gmail.com">people.head.dscnus@gmail.com</a></li>
                            <li className="contact__list-item">Others: <a href="mailto:lead.dscnus@gmail.com">lead.dscnus@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                {<Footer />}
            </div>
        )
    }
}

export default ContactPage;