import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ cardLink, imageLink, title, content, date }) => {
    return (
        <Link className="card card--clickable blog__article" to={cardLink}>
            <div className="card__image-box">
                <img src={imageLink} alt="event" />
            </div>
            <div className="card__content">
                <h2>{title}</h2>
                <p className="subheading">{date}</p>
                <p className="paragraph">{content}</p>
            </div>
        </Link>
    );
}

export default ArticleCard;