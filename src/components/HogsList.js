import HogDisplay from "./HogDisplay"

const HogsList = ({ hogsList }) => {
  const mappedHogs = hogsList.map(hogObj => <HogDisplay hogObj={hogObj} highestMedal={hogObj["highest medal achieved"]} key={hogObj.name}/>)


  //! Create drop down to utilize filter 
//! onChange for filter selection that then filters based on greased ? or not
//! <select option value= ''>Select one</select> // each option value is a option

//! also create sort here - remember it is destructive 

  return (
    <div className="ui grid container">{mappedHogs}</div>
  )
}

export default HogsList