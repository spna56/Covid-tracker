import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountry } from '../api'
import '../stylesheets/countrypicker.css';

class Countrypicker extends React.Component {

    state = {
        fetchedCountries: []
    }

    componentDidMount = async () => {
        const response = await fetchCountry()

        this.setState({ fetchedCountries: response })
        // console.log(this.state.fetchedCountries)
    }

    componentDidUpdate(prevState) {
        this.setState(prevState.fetchedCountries)
    }




    render() {

        const countries = this.state.fetchedCountries.countries
        if (!countries) {
            return 'loading....'
        }


        return (
              
                <FormControl className="form-control">
                    <NativeSelect defaultValue="" onChange={(e)=>{this.props.handlecountryChange(e.target.value)}}>
                        <option value="">Global</option>
                        {countries.map((country,i) =>
                            <option value={country.name} key={i}>{country.name}</option>)}
                    </NativeSelect>
                </FormControl>
              
        
        )

    }
}

export default Countrypicker;       