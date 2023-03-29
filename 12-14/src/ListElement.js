import { useState } from "react"
import Country from "./Country"

const ElementList = ({ country }) => {
    const [show, setShow] = useState(false)
    
    const handleShow = () => {
        setShow(!show)
        country.show = !country.show
    }
    
    return (
        <li key={country.name.common}>
            {country.name.common}
            < span > </span >
            <button onClick={handleShow}>
                {country.show === false ? "Show" : "Hide"}
            </button>
            {country.show === true ? <Country country={country}/> : null}
        </li>
        
    )

}

export default ElementList