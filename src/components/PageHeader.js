import React, { Component } from "react";
import { slide as Burger } from "react-burger-menu";
import { Menu, Dropdown, Segment, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { appOpen } from "../utils/utils.js";
import logo from "../assets/PageHeader/dscnuslogo.png";

class PageHeader extends Component {
  state = {
    inverted: true,
    activeItem: "",
    showMenu: false,
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      this.setState({
        inverted: false,
      });
    } else {
      this.setState({
        inverted: true,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className="menu">
        <Responsive as={Segment} minWidth={600} className="responsive">
          <Menu stackable inverted={this.state.inverted} className="menu">
            <Menu.Item as={Link} to="/">
              <img src={logo} alt="DSC Logo" className="logo" />
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item
                name="home"
                active={this.state.activeItem === "home"}
                as={Link}
                to="/"
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>

              { appOpen && <Menu.Item
                name="home"
                active={this.state.activeItem === "apply"}
                as={Link}
                to="/recruitment"
                onClick={this.handleItemClick}
              >
                Apply to DSC
              </Menu.Item> }

              <Dropdown item text="About">
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={this.handleItemClick}
                    as={Link}
                    active={this.state.activeItem === "about"}
                    to="/about"
                  >
                    About Us
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={this.handleItemClick}
                    as={Link}
                    active={this.state.activeItem === "team"}
                    to="/team"
                  >
                    Our Team
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text="Our Projects">
                <Dropdown.Menu>
                  <Dropdown.Item
                    name="internalprojects"
                    active={this.state.activeItem === "internalprojects"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/internalprojects"
                  >
                    Internal Projects
                  </Dropdown.Item>

                  <Dropdown.Item
                    name="externalprojects"
                    active={this.state.activeItem === "externalprojects"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/externalprojects"
                  >
                    External Projects
                  </Dropdown.Item>

                  <Dropdown.Item
                    name="blog"
                    active={this.state.activeItem === "blog"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/blog"
                  >
                    Blog
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item
                name="workshops"
                active={this.state.activeItem === "workshops"}
                onClick={this.handleItemClick}
                as={Link}
                to="/events"
              >
                Workshops
              </Menu.Item>

              <Menu.Item
                name="hack4good"
                active={this.state.activeItem === "hack4good"}
                onClick={this.handleItemClick}
                as={Link}
                to="/hack4good"
              >
                Hack For Good
              </Menu.Item>

              <Menu.Item
                name="webinars"
                active={this.state.activeItem === "webinars"}
                onClick={this.handleItemClick}
                as={Link}
                to="/past-webinar"
              >
                Past Webinars
              </Menu.Item>

              {/* <Menu.Item
                name="recruitment"
                active={this.state.activeItem === "recruitment"}
                onClick={this.handleItemClick}
                as={Link}
                // style={{backgroundColor: "teal", color: "white"}}
                to="/recruitment"
              >
                Recruitment
              </Menu.Item> */}
            </Menu.Menu>
          </Menu>
        </Responsive>
        <Responsive maxWidth={600}>
          <Burger>
            <Menu.Item
              name="home"
              active={this.state.activeItem === "home"}
              as={Link}
              to="/"
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>

            <Menu.Item
              name="about"
              onClick={this.handleItemClick}
              as={Link}
              active={this.state.activeItem === "about"}
              to="/about"
            >
              About Us
            </Menu.Item>

            <Menu.Item
              name="team"
              onClick={this.handleItemClick}
              as={Link}
              active={this.state.activeItem === "team"}
              to="/team"
            >
              Our Core Team
            </Menu.Item>

            <Menu.Item
              name="internalprojects"
              active={this.state.activeItem === "internalprojects"}
              onClick={this.handleItemClick}
              as={Link}
              to="/internalprojects"
            >
              Internal Projects
            </Menu.Item>

            <Menu.Item
              name="externalprojects"
              active={this.state.activeItem === "externalprojects"}
              onClick={this.handleItemClick}
              as={Link}
              to="/externalprojects"
            >
              External Projects
            </Menu.Item>

            <Menu.Item
              name="blog"
              active={this.state.activeItem === "blog"}
              onClick={this.handleItemClick}
              as={Link}
              to="/blog"
            >
              Blog
            </Menu.Item>

            <Menu.Item
              name="workshops"
              active={this.state.activeItem === "workshops"}
              onClick={this.handleItemClick}
              as={Link}
              to="/events"
            >
              Upcoming Workshops
            </Menu.Item>

            <Menu.Item
              name="hack4good"
              active={this.state.activeItem === "hack4good"}
              onClick={this.handleItemClick}
              as={Link}
              to="/hack4good"
            >
              Hack For Good
            </Menu.Item>

            <Menu.Item
              name="webinars"
              active={this.state.activeItem === "webinars"}
              onClick={this.handleItemClick}
              as={Link}
              to="/past-webinar"
            >
              Past Webinars
            </Menu.Item>

            {/* <Menu.Item
              name="recruitment"
              active={this.state.activeItem === "recruitment"}
              onClick={this.handleItemClick}
              as={Link}
              to="/recruitment"
            >
              Recruitment
            </Menu.Item> */}
          </Burger>
          {/* <Menu inverted>
                        <Menu.Item header onClick={()=>this.setState({showMenu: true})}><Icon name="bars" size="large"/></Menu.Item>
                    </Menu>
                    <Sidebar.Pushable as={Segment} style={{margin: 0, border: "none"}}>
                        <Sidebar
                            as={Menu}
                            animation="overlay"
                            icon="labeled"
                            inverted
                            onHide={()=>this.setState({showMenu: false})}
                            vertical
                            visible={this.state.showMenu}
                            width="thin"
                        >
                            <Menu.Item
                                name='home'
                                active={this.state.activeItem === 'home'}
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
                                        active={this.state.activeItem === 'about'}
                                        to='/about'>
                                            About Us
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={this.handleItemClick}
                                        as={Link}
                                        active={this.state.activeItem === 'team'}
                                        to='/team'>
                                        Our Core Team
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Menu.Item
                                name='projects'
                                active={this.state.activeItem === 'projects'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/projects'>
                            Our Projects
                            </Menu.Item>

                            <Menu.Item
                                name='blog'
                                active={this.state.activeItem === 'blog'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/blog'>
                            Blog
                            </Menu.Item>

                            <Menu.Item
                                name='contact'
                                active={this.state.activeItem === 'contact'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/contact'>
                            Contact Us
                            </Menu.Item> */}
          {/* </Sidebar> */}
          {/* </Sidebar.Pushable> */}
        </Responsive>
      </div>
    );
  }
}

export default PageHeader;
