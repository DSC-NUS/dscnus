import React, { Component } from 'react';
import {  } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import webdev1 from '../assets/WorkshopsPage/webdev1.png'
import webdev2 from '../assets/WorkshopsPage/webdev2.png'
import data0 from '../assets/WorkshopsPage/data0.png'
import data1 from '../assets/WorkshopsPage/data1.png'
import data2 from '../assets/WorkshopsPage/data2.png'
import data3 from '../assets/WorkshopsPage/data3.png'

class WorkshopsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
                {<PageHeader/>}
                <header class="home-header projects-header">
                    <div class="home-header__text-box">
                        <h1 class="heading-primary">
                            <span class="heading-primary--main">Our Technology Workshops</span>
                        </h1>
                    </div>
                </header>
                <div className="section-header section-green">
                        <h2 class="heading-secondary">
                            Data Analytics Workshops
                        </h2>
                        <p>In this academic year, DSC NUS Technology Team has conducted Data Analytics workshops accessible to any NUS students from any faculty or level.</p>
                        <p>The workshops aimed to upskill NUS students who wishs to learn more about how to apply Data Analytics in their respective areas.</p>
                    </div>
                <section className="section">

                    <div className="projects">
                        <div className="card-horizontal projects__project">
                            <div className="card-horizontal__image-box">
                                <img src={data0} alt="event"/>
                            </div>
                            <div className="card-horizontal__content">
                                <h2 class="heading-secondary">
                                    Introduction to Python
                                </h2>
                                <p>Python is our language of choice for Data Analytics. In our first introductory workshop, we'll be getting everyone up to speed with the fundamentals of programming in Python, as well as to set up a proper data science environment on your machine. From there, you'll have your bases covered to explore the rest of the data science ecosystem.</p>
                                <p>Topics covered: Programming in Python, setting up Anaconda and Jupyter, Utilizing third-party libraries</p>
                                <br></br>
                                <p>
                                    <ul>
                                        <li><strong>Date</strong>: 31 Jan 2020 (Week 3)</li>
                                        <li><strong>Time</strong>: 6.30pm to 9.30pm</li>
                                        <li><strong>Venue</strong>: LT33, S17, NUS</li>
                                    </ul>
                                </p>
                                <br></br>
                                <p>Click <a href="https://drive.google.com/drive/folders/1oV0adScuI61hPnrQZcOeliv89vJLos6y">here</a> to access our workshop materials.</p>
                            </div>
                        </div>
                        <div className="card-horizontal projects__project">
                            <div className="card-horizontal__image-box">
                                <img src={data1} alt="event"/>
                            </div>
                            <div className="card-horizontal__content">
                                <h2 class="heading-secondary">
                                    Data Collection and Web Scraping
                                </h2>
                                <p>Before any data analytics project, data needs to be collected. Data collection can be challenging when we are interested in different data sources. In this 2nd of 5-workshop series on Data Analytics, DSC NUS covers the Python Reddit API Wrapper (PRAW) for text collection. We learn to collect, save and load data for analysis in the next workshop.</p>
                                <p>Topics covered: Reading and writing data, web scraping with BeautifulSoup and Requests, web APIs for data collection (e.g. Reddit, Twitter)</p>
                                <br></br>
                                <p>
                                    <ul>
                                        <li><strong>Date</strong>: 14 Feb 2020 (Week 5)</li>
                                        <li><strong>Time</strong>: 6.30pm to 9.30pm</li>
                                        <li><strong>Venue</strong>: Youtube live-stream (in consideration of COVID-19)</li>
                                        <li><strong>Pre-requisite</strong>: Basic python knowledge OR our first workshop materials</li>
                                    </ul>
                                </p>
                                <br></br>
                                <p>Click <a href="https://drive.google.com/drive/folders/1UcanCG9lbb-oKjrFzEwqkdkOEW3sBJA_?usp=sharing">here</a> to access our workshop materials.</p>
                            </div>
                        </div>

                        <div className="card-horizontal projects__project">
                            <div className="card-horizontal__image-box">
                                <img src={data2} alt="event"/>
                            </div>
                            <div className="card-horizontal__content">
                                <h2 class="heading-secondary">
                                    Visualization and Pre-processing
                                </h2>
                                <p>In this 3rd of 5-workshop series on Data Analytics, we learn how to manipulate our data using Pandas, a powerful data analysis library in Python, and learn to visualise our data in Matplotlib, a plotting library in Python that generates various plots for analysis. Thereafter, using our data, we learn how to do Feature Engineering - that is, preparing our data, in ways that are suitable and optimal for our Machine Learning algorithms that will be covered in the next workshop.</p>
                                <p>Topics covered: Matplotlib, more on Pandas dataframe, data Pre-processing</p>
                                <br></br>
                                <p>
                                    <ul>
                                        <li><strong>Date</strong>: 21 Feb 2020 (Week 5)</li>
                                        <li><strong>Time</strong>: 6.30pm to 9.30pm</li>
                                        <li><strong>Venue</strong>: Youtube live-stream (in consideration of COVID-19)</li>
                                        <li><strong>Pre-requisite</strong>: Basic python knowledge OR our first workshop materials</li>
                                    </ul>
                                </p>
                                <br></br>
                                <p>Click <a href="https://drive.google.com/drive/u/0/folders/1eDowkibHMyoRMs_vBvTWbydRXzIjmus8">here</a> to access our workshop materials.</p>
                            </div>
                        </div>

                        <div className="card-horizontal projects__project">
                            <div className="card-horizontal__image-box">
                                <img src={data3} alt="event"/>
                            </div>
                            <div className="card-horizontal__content">
                                <h2 class="heading-secondary">
                                    Machine Learning
                                </h2>
                                <p>After you have done a large amount of work manipulating, analysing and cleaning your data, it is time for your data to do the work for you. In this 4th of 5-workshop series on Data Analytics, we tackle the most popular Machine Learning techniques out there and use them to create powerful models that allows us to make predictions with all those data.</p>
                                <p>But creating your model is only the first step, how do you know whether your model worked? That is where evaluating and validation comes into play. Join us to learn more about validation and see your model improve as it gets “trained”.</p>
                                <br></br>
                                <p>
                                    <ul>
                                        <li><strong>Date</strong>: 13 March 2020 (Week 8)</li>
                                        <li><strong>Time</strong>: 6.30pm to 9.30pm</li>
                                        <li><strong>Venue</strong>: Youtube live-stream (in consideration of COVID-19)</li>
                                        <li><strong>Pre-requisite</strong>: Basic python knowledge OR our first workshop materials</li>
                                    </ul>
                                </p>
                                <br></br>
                                <p>Click <a href="https://drive.google.com/drive/folders/12RDOOjRe4dMfIB5NXnGzpzHWVMa-4_j9?usp=drive_open">here</a> to access our workshop materials.</p>
                            </div>
                        </div>
                    </div>
                </section>
                    
                <div className="section-header section-blue">
                        <h2 class="heading-secondary">
                            Web Development Workshops
                        </h2>
                        <p>Ever wanted to create a website or a web application? Well, look no further!</p>
                        <p>We at DSC NUS will be launching our very first Web Dev FUNdamentals series. Through this series, we aim to equip anyone with zero programming knowledge with the essential skills required to build websites and web apps. </p>
                </div>
                <div className="projects">
                    <div className="card-horizontal projects__project">
                        <div className="card-horizontal__image-box">
                            <img src={webdev1} alt="event"/>
                        </div>
                        <div className="card-horizontal__content">
                            <h2 class="heading-secondary">
                            Web Dev FUNdamentals
                            </h2>
                            <p>Ever wanted to have your very own portfolio website to showcase your work to potential employers and friends? Then join us in building one on either Tuesday or Thursday evening on Week 3. We will be covering the essential basics of HTML, CSS and Github page deployment while we guide you through the portfolio project. No programming experience expected!</p>                   
                            <br></br>
                            <p>
                                <ul>
                                    <li><strong>Date</strong>: 30 Jan 2020</li>
                                    <li><strong>Time</strong>: 6.30pm to 9.30pm</li>
                                    <li><strong>Venue</strong>: SR5, COM 1, NUS</li>
                                </ul>
                            </p>
                            <br></br>
                            <p>Click <a href="https://github.com/dscnustech/DSC-Web-Dev-Workshop">here</a> to access our workshop materials.</p>
                        </div>
                    </div>
                    <div className="card-horizontal projects__project">
                        <div className="card-horizontal__image-box">
                            <img src={webdev2} alt="event"/>
                        </div>
                        <div className="card-horizontal__content">
                            <h2 class="heading-secondary">
                            React FUNdamentals
                            </h2>
                            <p>React is one of the fastest growing Javascript libraries for building web apps. Kick-start your web development journey by spending a Saturday afternoon with us learning the essential fundamentals of this popular and powerful framework by Facebook.</p>                   
                            <br></br>
                            <p>
                                <ul>
                                    <li><strong>Date</strong>: 8 Feb 2020</li>
                                    <li><strong>Time</strong>: 10.00am to 3.30pm</li>
                                    <li><strong>Venue</strong>: B1-09, COM 1, NUS</li>
                                </ul>
                            </p>
                            <br></br>
                            <p>Click <a href="https://github.com/dscnustech/React-Workshop">here</a> to access our workshop materials.</p>
                        </div>
                    </div>
                </div>
            
                {<Footer />}
            </div>
        );
    }
}

export default WorkshopsPage;