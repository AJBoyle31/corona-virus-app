import React from 'react';
import Country from './Country';
import '../App.css';


function Countries(props){
    return (
        <ul className="countryList">
            {props.data.map(item => (
                <Country country={item} />
            ))}
        </ul>
    );
}

export default Countries;