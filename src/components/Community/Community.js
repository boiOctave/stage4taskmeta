import React from 'react';

import rating from 'assets/images/Frame 595285stars.svg';
import heart from 'assets/images/heart.svg';

import './Community.css';

const Community = ({ data }) => {
    return (
        <section className='communiy section ' id='community'>
            <div className='community-content container flex'>
                <h1>Inspiration for your next adventure</h1>
                <div className='meta__cards'>
                    {data.map((card, index) => (
                        <div className='card' key={index}>
                            <div className='card__img'>
                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className='card__image'
                                />
                                <img
                                    src={heart}
                                    alt={heart}
                                    className='heart'
                                />
                            </div>
                            <div className='card__description'>
                                <div className='descrption__top'>
                                    <span className='card__name'>
                                        {card.name}
                                    </span>
                                    <span className='card__price'>
                                        {card.price}MBT per night
                                    </span>
                                </div>
                                <div className='descrption__middle'>
                                    <span className='card__distance'>
                                        {card.distance}km away
                                    </span>
                                    <span className='card__length'>
                                        available for {card.length}weeks stay
                                    </span>
                                </div>
                                <div className='descrption__bottom'>
                                    <img src={rating} alt='5star' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
