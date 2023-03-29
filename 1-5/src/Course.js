import Header from "./Header"
import Content from "./Content"

const Courses = ({courses}) => {
    return (
        courses.map((course) => {
        return (<div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <br/>
        </div>)
        })
        
    )
}

export default Courses