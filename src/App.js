import React from 'react';
import Cards from './components/Card'
import Chart from './components/Chart'
import Countrypicker from './components/Countrypicker'
import './App.css'
import {fetchdata} from './api'
import image from './images/image.png';

class App extends React.Component {

    state={
        data:{},
        country:''
    }
  
    componentDidMount=async ()=>{
       const fetcheddata=await fetchdata()
      this.setState({data:fetcheddata})
    }


    handlecountryChange=async (country)=>{
        const fetcheddata=await fetchdata(country);
    //  console.log(Data)
      this.setState({data:fetcheddata,country:country})
    }
    render() {
 
        const data=this.state.data
        const country=this.state.country
        return (
           
            <div className="container">
                 <img className="image" src={image} alt="COVID-19" />
                <Cards  data={data}/>
                <Countrypicker handlecountryChange={this.handlecountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App