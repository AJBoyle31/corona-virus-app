import React from 'react';

function CountryData(props){
    return (
        <div>
            <p>Cases: {props.country.cases}</p>
            <p>Deaths: {props.country.deaths}</p>
    <p>Motality Rate: {props.country.deaths / props.country.cases}</p>
        </div>
    );
}

export default CountryData;