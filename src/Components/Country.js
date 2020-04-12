import React, {Component} from 'react';
import CountryData from './CountryData';

class Country extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: true
        }
        this.toggleStats = this.toggleStats.bind(this);
    }
    toggleStats(){
        this.setState(state => ({
            isHidden: !state.isHidden
        }));
    }
    render(){
        //let showStats = this.state.isHidden;
        return (
            <li key={this.props.country.country} className="countryBubble" onClick={this.toggleStats}>
                {this.props.country.country}
                <br/>
                {this.state.isHidden ? "" : <CountryData country={this.props} />}
            </li>
        );
    
    }
}

export default Country;