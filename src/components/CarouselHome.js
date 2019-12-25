import React, {Component, useState} from 'react';
import {Button } from 'semantic-ui-react'
import data from '../data/carouselhomedata.js'
import Card from "./Card.js"

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
                <section className="carouselhome-slider-section">
                    <div className="carouselhome-slider">
                        <Button 
                            circular 
                            icon='left chevron' 
                            basic 
                            color='blue'
                            onClick={() => this.prevProperty()} 
                        />
                        <Button 
                            circular 
                            icon='right chevron' 
                            basic 
                            color='blue'
                            onClick={() => this.nextProperty()} 
                        />
                    </div>
                </section>
                <div className={`cards-slider active-slide-${property.index}`}>
                    <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                        {
                        properties.map(property => <Card key={property._id} property={property} />)
                        }

                    </div>

                </div>


            </div>
        )
    }
}

export default CarouselHome;