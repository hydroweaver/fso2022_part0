function Total(props){
    const {parts} = props
    // parts.map(part => total += part.exercises);

    return(
        <div>
                {/* // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#sum_of_values_in_an_object_array */}
            <b>total of {parts.reduce((accumulator, currentValue)=>(accumulator+currentValue.exercises), 0)}</b>
        </div>
    )
}

export default Total