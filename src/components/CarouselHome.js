import React, {Component, useState} from 'react';
import { Card, Button } from 'semantic-ui-react'
import data from '../data/carouselhomedata.js'

const imagePath = require.context('./../assets/HomePage/', true);

class CarouselHome extends Component { 
    constructor(props){
        super(props)
        this.state = {
            properties: data.properties,
            property: data.properties[0],
            imageName: imagePath(`${data.properties[0].picture}`)

        }
    }

    nextProperty = () => {
        const newIndex = (this.state.property.index+1) % data.properties.length
        this.setState({
            property: data.properties[newIndex],
            imageName: imagePath(`${data.properties[newIndex].picture}`)
        })

    }

    prevProperty = () => {
        const newIndex = Math.abs((this.state.property.index-1) % data.properties.length)
        this.setState({
            property: data.properties[newIndex],
            imageName: imagePath(`${data.properties[newIndex].picture}`)
        })

    }

    render(){
        const {properties, property, imageName} = this.state;
        return(
            <div class="carousel">
                <div className="cards-slider">
                    <div className="cards-slider-wrapper">
                        <Card
                            className="carouselhome-card"
                            image={imageName} 
                            header={property.header}
                            description={property.description}  />
                    </div>

                </div>


                <section className="carouselhome-slider-section">
                    <div className="carouselhome-slider">
                        <Button circular icon = 'left chevron' 
                        onClick={() => this.prevProperty()} />
                        <Button circular icon = 'right chevron' 
                        onClick={() => this.nextProperty()} />
                    </div>
                </section>
            </div>
        )
    }
}

export default CarouselHome;