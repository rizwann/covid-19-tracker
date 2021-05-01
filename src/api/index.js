import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const modifiedResp = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedResp;
  } catch (error) {
      console.log(error)
  }
};


export const fetchDailyData = async () =>{
  try {
    const {data} = await axios.get(`${url}/daily`)
const modiefiedData = data.map((dailyData)=>({
confirmed: dailyData.confirmed.total,
deaths: dailyData.deaths.total,
date: dailyData.reportDate
}))
return modiefiedData
  } catch (error) {
    console.log(error)
  }
}



export const fetchCountries = async () =>{
try {
  const {data:{countries}} = await axios.get(`${url}/countries`)
  return countries.map(country=>country.name)
} catch (error) {
  
}
}