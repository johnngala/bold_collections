import React from 'react';
import { Helmet } from 'react-helmet';


const About = () => {
  
    return (
        <main className='about'>
            <Helmet>
                <title>Bold Collections - About</title>
                <meta
                    name='description'
                    content='About us'
                />
            </Helmet>

            <header className='about__header'>
                <h1 className='about__heading'>Who we are!</h1>
            </header>

             <div className = 'about__image'>
                    <img src = 'imgs/about.jpg' alt = 'about' className = 'about__us__image'/>
            </div>
            
            <section className='about__info'>
                <div className='about__about'>  
                    <h2 className='about__subheading'>We brighten up your closet</h2>
                    <p className='about__paragraph'>
                        Bold Collections is a clothing store focused specifically on wearable statement pieces from international designers.
                        While there are plenty of options out there for high-end luxury clothing, 
                        trendy fast-fashion pieces and your essential basics, we see an opportunity to focus on those special,
                        individualized garments and accessories that allow our clients to express themselves.
                        Our collection is curated with products that can make statements in a person's everyday life.
                    </p>    
                </div>
                
            </section>
            
        </main>
    );
};

export default About;
