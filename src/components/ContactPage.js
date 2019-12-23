import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';

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

    fetch('http://localhost:3000/send',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    }).then(
    	(response) => (response.json())
    ).then((response)=>{
        if (response.status === 'success'){
            this.setState({
                success: true,
                firstname: '',
                lastname: '',
                email: '',
                message: '',
            });
        } else if (response.status === 'fail') {
            this.setState({failure: true});
        }
    })
        
        // axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        //     "service_id": "gmail",
        //     "template_id": "contactform",
        //     "user_id": process.env.EMAILJS_APIKEY,
        //     "template_params": {
        //         "name": this.state.firstname + " " + this.state.lastname,
        //         "email": this.state.email,
        //         "subject": "Message from DSC NUS Website",
        //         "message": this.state.message
        //     }
        // }).then(body => {
        //     // console.log("body", body);
        //     if (body.data === "OK") {
        //         this.setState({
        //             success: true,
        //             firstname: '',
        //             lastname: '',
        //             email: '',
        //             message: '',
        //         });
        //     }
        // }).catch((e) => {
        //     // console.log(e);
        //     this.setState({failure: true});
        // });
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

    // componentDidMount() {
    //     window.scrollTo(0, 0);
    // }

    render() {
        return (
            <div>
                {<PageHeader />}
                <div className="contact__header">
                    <h1 className="heading-secondary">Let's stay connected!</h1>
                </div>
                <div className="contact__content">
                    <div className="contact__form">
                        <h2 className="heading-tertiary">Contact Us</h2>
                        <p className="subheading contact__form-header">Please fill out the quick form and we'll get in touch with you shortly!</p>
                        <label for="first-name">First Name</label>
                        <input 
                            type="text" 
                            className="contact__form-input" 
                            placeholder="First name"
                            name="first-name"
                        />
                        <label for="last-name">Last Name</label>
                        <input 
                            type="textarea" 
                            className="contact__form-input" 
                            placeholder="Last name"
                            name="last-name"
                        />
                        <label for="Message">Your Message</label>
                        <input 
                            type="text" 
                            className="contact__form-input contact__form-textarea" 
                            placeholder="Type here..."
                            name="message"
                        />
                        <button className="btn btn-inline">Submit</button>
                    </div>
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
                            <li className="contact__list-item">Others: <a href="mailto:external.lead.dscnus@gmail.com">external.lead.dscnus@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                {<Footer />}
            </div>
        )
    }
}

export default ContactPage;