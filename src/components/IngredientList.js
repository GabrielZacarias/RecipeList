import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map((ingredient, index) => {
    return <Ingredient key={index} {...ingredient}/>
  })

  return (
    <div className='ingredient-grid'>
      {ingredientElements}
    </div>
  )
}
