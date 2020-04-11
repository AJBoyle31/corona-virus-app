import React from 'react';
import CountryData from './CountryData';

function Country(props){
    let open = true;
    function handleClick() {
        open = !open;
    }
    return (
        <div>
            <li key={props.country.country} className="countryBubble" onClick={handleClick}>
                {open ? props.country.country : <CountryData country={props.country}/>}
            </li>
        </div>
    );
}

export default Country;