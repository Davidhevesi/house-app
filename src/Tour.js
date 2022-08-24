import React, { useState } from 'react'

const Tour = ({ id, image, info, price, name }) => {
  return (
    <div>
      <img src={image} alt={name} />

      <h4>{name}</h4>
      <h4>${price}</h4>

      <p>{info}</p>
      <button>Not Interestes</button>
    </div>
  )
}

export default Tour
