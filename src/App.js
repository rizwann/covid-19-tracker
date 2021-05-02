import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Footer from "./components/Footer";
import covidImage from './Images/image.png'
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
        <img src={covidImage} alt="COVID-19" className={styles.image}/>
        <Cards data={data} />
        <CountryPicker handleCountrySwitch={this.handleCountrySwitch}/>
        <Chart data={data} country={country} />
        <Footer/>
      </div>
    );
  }
}

export default App;
