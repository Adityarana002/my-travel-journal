import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

export default function Card(prop) {
    return (
        <div className="card-container">
            <img 
                src={`/Images/${prop.imageUrl}`}
                alt="card-img"
                className="card-image"
           />
                <div className='right-cotainer'>
                    <div className='card-location'>
                        <FontAwesomeIcon icon={faLocationDot} className='location-icon'/>
                        <p className='location-name'>{prop.location}</p>
                        <a href= {prop.googleMapsUrl} target="_blank" rel="noopener noreferrer" className='location-link'>View on Google Maps</a>
                    </div>
                    <h2 className='card-heading'>{prop.title}</h2>
                    <p className='card-date'>{prop.startDate} - {prop.endDate}</p>
                    <p className='card-para'>{prop.description}</p>
                </div>
        </div>
    );
}
