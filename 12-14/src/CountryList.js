import ListElement from "./ListElement"

const CountryList = ({ countries }) => {
    return (
        countries.map((country) => {
            return (
                <ul key={country.name.common}>
                    <ListElement country={country} />
                </ul>
            )
        })
    )
}

export default CountryList