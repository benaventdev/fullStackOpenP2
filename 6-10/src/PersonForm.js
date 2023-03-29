const PersonForm = ({newName, newNumber, persons, setNewName, setNewNumber, setPersons}) => {
    const handleName = (event) => {
        setNewName(event.target.value)
    }

    const handleNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const handlePerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }

        persons.find((person) => {
            return newPerson.name.toLocaleLowerCase() === person.name.toLocaleLowerCase()
        })
            ? alert(`El usuario ${newPerson.name} ya existe`)
            : setPersons([...persons, newPerson])

        setNewNumber(" ")
        setNewName(" ")
    }

    return (
        <form onSubmit={handlePerson}>
            <div> name: <input onChange={handleName} value={newName} /> </div>
            <div> number: <input onChange={handleNumber} value={newNumber} /> </div>
            <div> <button type="submit">add</button> </div>
        </form>
    )
}

export default PersonForm