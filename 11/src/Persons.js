const Persons = ({persons, newFilter}) => {
    return( 
    <div>
        {persons
        .filter(person => {
          if(newFilter === "") return person
          else return person.name.toLowerCase().includes(newFilter.toLowerCase()) 
        })
        .map((person) => {
          return <p key={person.name}>{person.name} {person.number}</p>
        })}
        </div>
    )
}

export default Persons