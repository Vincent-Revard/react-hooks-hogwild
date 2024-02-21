
import { useState } from "react"


// specialty, weight, greased, and highest medal achieved
export const HogDisplay = ({hogObj: {name, image, specialty, greased, weight}, highestMedal}) => {
  const [hogClicked, setHogClicked] = useState(false)
  
  const hogToggleDetails = () => {
      setHogClicked(currentValue => !currentValue)
    }

    
  return (
    <div className="ui eight wide column">
      <h3>{name}</h3>
      <img src={image} alt={name} onClick={hogToggleDetails}/>
      {hogClicked? (
        <>
        <span>specialty: {specialty}</span>
        <span>Greased:{greased? "Yes":"No"}</span>
        <span>Weight: {weight}</span>
        <span>Highest Medal Achieved: {highestMedal}</span>
        </>
      ): null}
    </div>
  )
}


export default HogDisplay