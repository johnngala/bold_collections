import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ListingDetail = (props) => {
    const [listing, setListing] = useState({});
    const [price, setPrice] = useState(0);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    useEffect(() => {
        const slug = props.match.params.id;

        // const config = {
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`
        //     }
        // };

        axios.get(`http://localhost:8000/api/listings/${slug}`) //, config
        .then(res => {
            setListing(res.data);
            setPrice(numberWithCommas(res.data.price));
        })
        .catch(err => {

        });
    }, [props.match.params.id]);



    const displayInteriorImages = () => {
        let images = [];

        images.push(
            <div key={1} className='listingdetail__display__others'>
                <div className='listingdetail__images'>
                    {
                        listing.photo_1 ? (
                            <div>
                                <img className='listingdetail__other__images' src={listing.photo_1} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='listingdetail__images'>
                    {
                        listing.photo_2 ? (
                            <div>
                                <img className='listingdetail__other__images' src={listing.photo_2} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='listingdetail__images'>
                    {
                        listing.photo_3 ? (
                            <div className='listingdetail__disply'>
                                <img className='listingdetail__other__images' src={listing.photo_3} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={2} className='listingdetail__display__others'>
                <div className='listingdetail__images'>
                    {
                        listing.photo_4 ? (
                            <div>
                                <img className='listingdetail__other__images' src={listing.photo_4} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='listingdetail__images'>
                    {
                        listing.photo_5 ? (
                            <div>
                                <img className='listingdetail__other__images' src={listing.photo_5} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='listingdetail__images'>
                    {
                        listing.photo_6 ? (
                            <div>
                                <img className='listingdetail__other__images' src={listing.photo_6} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        return images;
    };

    return (
        <div className='listingdetail'>
            <Helmet>
                <title>Bold Collections - Products| {`${listing.title}`}</title>
                <meta
                    name='description'
                    content='Listing detail'
                />
            </Helmet>

            <div className='listingdetail__header'>
                <h1 className='listingdetail__title'>{listing.title}</h1>
            </div>
            <div className=''>
                <div className='listingdetail__breadcrumb'>
                <Link className='listingdetail__breadcrumb__link' to='/listings'>Products</Link> | {listing.title}
                </div>
            </div>

            <div className = 'listingdetail--container'>
               
                <div className=' listingdetail__images'>
                    <div className='col-3-of-4'>
                        <div className='listingdetail__display__main'>
                            <img className='listingdetail__main__image' src={listing.photo_main} alt='' />
                        </div>
                    </div>
                    <div className = 'listingdetail__display__others'>
                    {displayInteriorImages()}
                    </div>
                </div>
                

                <div className='listingdetail__about-product'>
                    <div className=''>
                        <ul className='listingdetail__list'>
                            <li className='listingdetail__list__item'>Price: ${price}</li>
                        </ul>
                    </div>

                    <div className=''>
                        <ul className='listingdetail__list'>
                            <li className='listingdetail__list__item'>Category: {listing.category}</li>
                        </ul>
                    </div>

                    <div className='listing__items'>
                        <p className='listingdetail__description'>{listing.description}</p>
                    </div>

                    <div  className = 'contact__to__buy--button' >
                        <a href="https://wa.me/0722882815"  className = 'contact__to__buy--button--link '>
                            {/* <img src = 'imgs/whatsapp.png' alt='whatsapp image' className = 'contact__to__buy--button--image'/>  */}
                        </a>
                        <a href="https://wa.me/0722882815" className = 'contact__to__buy--button--link '>
                            <p className = 'contact__to__buy--button--paragraph'>Contact to Buy</p>
                        </a>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default ListingDetail;

