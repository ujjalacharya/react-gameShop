import React from 'react'

const CardLabel = ({label}) => {
  let labelDollor = `$ ${parseFloat(label/100)}`
  return (
      <span className="ui green ribbon label">{labelDollor}</span>
  )
}

export default CardLabel
