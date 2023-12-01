//component create each html things and return them as functions to the places where it is called

import { useState } from "react"

const WorkoutForm = () => {

    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')

    return (

        <form className="create">

            <h3>Add a new Workout</h3>

            <label>Exersice Title</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value = {title}
            />

            <label>Load (in kg)</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value = {title}
            />
            <label>Reps:</label>
            <input
                type="text"
                onChange={(e) => setReps(e.target.value)}
                value = {title}
            />

            <button>add Button</button>
        </form>

    )
}


//use state is used to refresh the page obj each time values changed
//set functions of use state use to change the values and name of the state is used to get the values
