import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './Content';

function App() {
  const [countryList, setCountryList] = useState([])
  const [filter, setFilter] = useState("")
  const [countries, setCountries] = useState([])
  const [data, setData] = useState(false)

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountryList(response.data)
        setData(true)
      })
  }, [])

  useEffect(() => {
    setCountries(
      (countryList
        .filter((country) => {
          return country.name.common.toLowerCase().includes(filter.toLowerCase())
        })
        .map((country) => {
          country["show"] = false
          return country
        }))
    )
  }, [countryList, filter])

  const handlerFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <p>Insert values to find a country</p>
      {data === false
      ? <h1>Loading...</h1>
      : <input onChange={handlerFilter} value={filter}></input>}
      <Content countries={countries} />
    </div>
  )
}

export default App;