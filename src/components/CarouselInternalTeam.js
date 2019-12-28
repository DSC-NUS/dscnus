import React, {Component, useState} from 'react';
import { Button, Grid, Card } from 'semantic-ui-react'
import data from '../data/carouselteaminternal.js'


const imagePath = require.context('./../assets/TeamPage/InternalTeam', true);

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
                <Grid>
                    <Grid.Column width={3}>
                    <Button 
                            circular 
                            icon='left chevron' 
                            basic 
                            color='blue'
                            onClick={() => this.prevProperty()} 
                        />
                    </Grid.Column>
                    <Grid.Column width = {10}>
                        {/* #TODO: Resize the images  */}
                        <Card
                        image={imageName}
                        header={property.header}
                        description={property.description}
                        />
                    </Grid.Column>
                    <Grid.Column width = {3}>
                    <Button 
                            circular 
                            icon='right chevron' 
                            basic 
                            color='blue'
                            onClick={() => this.nextProperty()} 
                        />
                    </Grid.Column>
                </Grid>

            </div>
        )
    }
}

export default CarouselHome;