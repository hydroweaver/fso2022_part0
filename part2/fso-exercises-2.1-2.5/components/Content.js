import Part from "./Part"

function Content(props){
    const {parts} = props
    return(
        <div>
            {parts.map(part => <Part key={part.id} part={part}/>)}
        </div>
    )
}

export default Content