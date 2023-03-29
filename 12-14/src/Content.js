import Country from "./Country"
import CountryList from './CountryList'

const Content = ({countries}) => {
    if (countries.length === 0 || countries.length > 10) return
    else if(countries.length === 1) {
        return <Country country={countries[0]}/>
    } else if (countries.length > 1 && countries.length < 10) {
        return <CountryList countries={countries}/>
    } else {
        console.log("Hi ha massa, filtra")
    }
}

export default Content