import React, {Component, useState} from 'react';
import { Card, Button } from 'semantic-ui-react'
import data from '../data/carouselhomedata.js'


class CarouselHome extends Component { 
    constructor(props){
        super(props)
        this.state = {
            properties: data.properties,
            property: data.properties[0]

        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1
        this.setState({
            property: data.properties[newIndex]
        })

    }

    prevProperty = () => {
        const newIndex = this.state.property.index-1
        this.setState({
            property: data.properties[newIndex]
        })

    }

    render(){
        const {properties, property} = this.state;
        return(
            <div class="carousel">
                <div className="cards-slider">
                    <div className="cards-slider-wrapper">
                        <Card
                            image={property.picture} 
                            header={property.header}
                            description={property.description}  />
                    </div>

                </div>


                <section>
                    <Button circular icon = 'left chevron' 
                    onClick={() => this.prevProperty()} 
                    disabled={property.index==0}/>
                    <Button circular icon = 'right chevron' 
                    onClick={() => this.nextProperty()}
                    disabled={property.index==data.properties.length-1} />
                </section>
            </div>
        )
    }
}

export default CarouselHome;