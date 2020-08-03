import React from 'react';

const Card = ({name, url}) => {
    url = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','');
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <a href = {`https://pokemondb.net/pokedex/${name}`} className = "no-underline" target="_blank">
            <div className = 'bg-light-green dib br3 pa3 ma2 grow bws shadow5'>
                <img alt = 'loomian' src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`} height = '230' width = '220'/>
                <div className = "tc black">
                    <h2>{name}</h2>
                    <p>Click for details.</p>
                </div>
            </div>
        </a>
    );
}

export default Card;