import Part from "./Part"

const Content = ({parts}) => {
    const imprime = parts.map((part) => {
        return <Part key={part.id} name={part.name} exercises={part.exercises}/>
    })

    const sumaExercisis = parts.reduce((accum, current) => {
        return accum + current.exercises
    }, 0)

    return (
        <div>
            {imprime}
            <p>Total de ejercicios: {sumaExercisis}</p>
        </div>
    )
}
export default Content