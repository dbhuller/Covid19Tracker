import React from 'react';

// use object destructuring to import components from index.js in components/
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api';

//app is class based rather than using hooks
class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }
    render() {
        const { data } = this.state;
        return(
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;