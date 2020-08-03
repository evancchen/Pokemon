import React from 'react';
import Card from './Card';
// import loomians from './loomians';

const CardList = ({loomians}) => {
    return ( 
        loomians.map((user, i) => {
            return( 
                <Card
                name = {user.name} 
                url = {user.url}
                />
            );
        })
    );
}

export default CardList;