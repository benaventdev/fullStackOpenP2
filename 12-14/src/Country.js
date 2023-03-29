export const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages:</h2>
            <ul>
                {Object.entries(country.languages).map((arr) => {
                    return <li key={arr[0]}>{arr[1]}</li>
                })}
            </ul><br/>
            <img alt={country.flags.alt} src={country.flags.png} />
        </div>
    )
}

export default Country