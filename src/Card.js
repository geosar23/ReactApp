import React from 'react';

const Card = () => 
{
    return(
        <div className='bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robot photo" src="https://robohash.org/test?200x200"/>
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;