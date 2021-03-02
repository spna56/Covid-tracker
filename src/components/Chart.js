import React from 'react';
import { fetchDailydata } from '../api'
import { Line,Bar } from 'react-chartjs-2'



class Chart extends React.Component {

    state = {
        dailydata: []
    }

    componentDidMount = async () => {
        const response = await fetchDailydata()
        this.setState({ dailydata: response })
        console.log(response)


    }
    componentDidUpdate(prevState){
        this.setState(prevState.dailydata)

    }

    

    barChar(){
        const data=this.props.data
        const country=this.props.country
       
       
        return(
            data.confirmed ? (
                <Bar
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'

                        ],
                        data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                  }} />


            ):null
        )
    }

    linechart() {
        const dailydata = this.state.dailydata

        return (
            this.state.dailydata.length ? (
                <Line  
                data={{
                 labels:dailydata.map(data=>(data.reportDate)),
                 datasets:[{
                     data:dailydata.map(data=>(data.confirmed.total)),
                     label:'Infected',
                     borderColor:'#3333ff',
                     fill:true
                 },
                {
                    data:dailydata.map(data=>(data.deaths.total)),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true

                }]
               

                 } }
                  />
            ) : null
        )
    }
    
   render() {
       
const country=this.props.country
console.log(country)

        return (
            <div className="container" style={{width:"75%", display: "flex",
            justifyContent:" center"}}>
                {country?this.barChar():this.linechart()}
            </div>
        )

    }
}

export default Chart