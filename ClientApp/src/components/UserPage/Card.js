import React from 'react';
import Carddata from './Card_data';
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = () => {
    const cardMain = Carddata.map((val) => (
        <div className='cards'>
            <div className='card'>
                <img src={val.imgsrc} alt='mypic' className='card_img'></img>
                <div className='card_info'>
                    <h3 className='card_title'>{val.title}</h3>
                    <span className='card_description'>{val.description}</span>
                    <br />
                    <Link tag={Link} className="button" to={val.link} > Start</Link>
                </div>
            </div>
        </div>
    ));
    return <>{cardMain}</>;
};


export default Card;
