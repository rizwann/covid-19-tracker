import React from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'
import { useEffect } from 'react'
import { useState } from 'react'

function CountryPicker({handleCountrySwitch}) {

const [loadedCountries, setLoadedCountries] = useState([])

useEffect(()=>{
const fetchCountryAPI = async () =>{
    setLoadedCountries(await fetchCountries())
}
fetchCountryAPI()
},[setLoadedCountries])



    return (
       
           <FormControl className={styles.formcontrol}>
               <NativeSelect defaultValue='' onChange={(e)=> handleCountrySwitch(e.target.value)} >
                   <option value='global'>Global</option>
                   {loadedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
               </NativeSelect>

           </FormControl>
     
    )
}

export default CountryPicker
