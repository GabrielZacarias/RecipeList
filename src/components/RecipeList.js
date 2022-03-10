import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes, handleRecipeAdd, handleRecipeDelete, handleRecipeSelect }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((item, index) => (
          <Recipe key={index} {...item} handleRecipeDelete={handleRecipeDelete} handleRecipeSelect={handleRecipeSelect} />
        ))}
        
        <div className="receipe-list__add-receipe-btn-container">
        <button 
          className="btn btn--primary" 
          onClick={handleRecipeAdd}>
            Add Recipe
        </button>
        </div>
      </div>
    </div>
  )
}
