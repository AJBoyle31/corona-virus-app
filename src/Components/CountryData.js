import React from 'react';

function CountryData(props){
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if (props.hidden){
        return <div></div>;
    } else {
        const mortalityRate = (props.country.country.deaths / props.country.country.cases).toFixed(2);
        const cases = numberWithCommas(props.country.country.cases);
        const deaths = numberWithCommas(props.country.country.deaths);
        return (
            <div>
                <p>Cases: {cases}</p>
                <p>Deaths: {deaths}</p>
                <p>Motality Rate: {(mortalityRate * 100) + "%"}</p>
            </div>
        );
    }
    
}

export default CountryData;