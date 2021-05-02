import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
state={
  data:{},
  country:'',
}



  async componentDidMount(){
    const loadedData = await fetchData();
    this.setState({data: loadedData})
  }
 handleCountrySwitch = async (country) =>{
   const countryData = await fetchData(country);
   this.setState({data: countryData, country: country})
 }

  render() {
    const {data, country} = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountrySwitch={this.handleCountrySwitch}/>
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
