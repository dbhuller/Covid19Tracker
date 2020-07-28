import React from 'react';

// use object destructuring to import components from index.js in components/
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import covidImg from './images/covidimg.png'

import { fetchData } from './api';

//app is class based rather than using hooks
class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        // fetch data
        const fetchedData = await fetchData(country);
        // set state
        this.setState({ data: fetchedData, country: country })
        // console.log(fetchedData);
        // console.log(country);
    }
    render() {
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img src={covidImg} className={styles.image} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;