import React, {Component} from 'react';
import Countries from './Countries';

class Coronavirus extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }
    componentDidMount() {
        fetch("https://corona.lmao.ninja/countries")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }     
            )
    }
    render(){
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                //Search Component
                <Countries data={data} />
            );
        }
        
    }
}

export default Coronavirus;