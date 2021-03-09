import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = (props) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className='card'>
            <h3 className='card__title'>{props.title}</h3>
            <div className='card__header'>
                <img className='card__header__photo' src={props.photo_main} alt='product' />
            </div>
            <div >
                <div className='col-2-of-3'>
                    <p className='card__price'>Price: ${numberWithCommas(props.price)}</p>
                </div>
                <div className='col-1-of-3'>
                    <p className='card__category'>{props.title}</p>
                </div>
            </div>
            <Link className='card__link' to={`/listings/${props.slug}`}>View Product</Link>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    photo_main: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};

export default Card;
