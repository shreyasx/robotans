import React from 'react';
const Card = ({ name, email, id }) => (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 tc shadow-5">
        <img src={`https://robohash.org/vszrsv${id}?200x200`} alt="ro-bo-tan" />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
);

export default Card;