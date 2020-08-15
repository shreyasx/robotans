import React from 'react';
import Card from './card';
const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map(x => <Card
                    key={x.id}
                    id={x.id}
                    name={x.name}
                    email={x.email} />
                )
            }
        </div>
    );
}
export default CardList;