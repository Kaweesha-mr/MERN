//component create each html things and return them as functions to the places where it is called

import { useState } from "react"

const WorkoutForm = () => {

    const [title,setTitle] = useState('')
    const [loads,setLoads] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState(null)

    const handleSubmit =async (e) =>{
        e.preventDefault()

        const workout = {title,loads,reps}

        const  response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }

        if(response.ok){
            setTitle('')
            setLoads('')
            setReps('')
            setError(null)
            console.log("new workout added",json)
        }
    }

    return (

        <form className="create" onSubmit={handleSubmit}>

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
                onChange={(e) => setLoads(e.target.value)}
                value = {loads}
            />
            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value = {reps}
            />

            <button>add Button</button>
            {error && <div className="error"> {error}</div>}
        </form>

    )
}


export default WorkoutForm

//use state is used to refresh the page obj each time values changed
//set functions of use state use to change the values and name of the state is used to get the values
