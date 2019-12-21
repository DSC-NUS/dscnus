import React, { Component } from 'react';
import { Menu, Dropdown, Segment, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../assets/PageHeader/dscnuslogo.png'

class PageHeader extends Component {
    state = {
        inverted: true
    }
    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            this.setState({
                inverted: false
            })
        } else {
            this.setState({
                inverted: true
            })
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div class="menu">
                <Responsive as={Segment} minWidth={800} className="responsive">
                    <Menu stackable inverted={this.state.inverted} className="menu">
                        <Menu.Item
                            as={Link}
                            to='/'>
                        <img src={logo} alt="DSC NUS Logo" className="logo"/>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item
                                name='home'
                                //active={activeItem === 'home'}
                                as={Link}
                                to="/"
                                onClick={this.handleItemClick}
                            >
                            Home
                            </Menu.Item>

                            <Dropdown item text='About'>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={this.handleItemClick}
                                        as={Link}
                                        to='/about'>
                                            About Us
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={this.handleItemClick}
                                        as={Link}
                                        to='/team'>
                                        Our Core Team
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Menu.Item
                                name='projects'
                                //active={activeItem === 'projects'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/projects'>
                            Our Projects
                            </Menu.Item>

                            <Menu.Item
                                name='blog'
                                //active={activeItem === 'blog'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/blog'>
                            Blog
                            </Menu.Item>

                            <Menu.Item
                                name='contact'
                                //active={activeItem === 'contact'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/contact'>
                            Contact Us
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Responsive>
            </div>
    )
  }
}

export default PageHeader;