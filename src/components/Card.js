import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property, imageName}) => {
    console.log('property', property)
    const {index, header, description} = property;
    return (
        <div id={`card-${index}`} className="carousel-card">
            <div className="carousel-card__image-box">
                <img src={imageName} alt={header}/>
            </div>
            <div className="details">
                <span className="index">{index+1}</span>
                <h2>{header}</h2>
                <p className="event">
                    {description}
                </p>
                {/* <ul className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul> */}
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
