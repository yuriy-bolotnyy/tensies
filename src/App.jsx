import React from 'react'
import Die from './components/Die'
import '../style.css'

import { nanoid } from 'nanoid'


/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */

  

  const App = () => {
    const randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 7));
    const [dies, setDies] = React.useState(randomArray)
    console.log("dies: ", dies)
    console.log("dies: ", dies.map(die => (<div>{die}</div>)))    

    return (
        <main>
          <div className='grid-container'>
            {dies.map(die => (<Die value={die} key={nanoid()}/>))}
          </div>
        </main>
    )
  }

  export default App