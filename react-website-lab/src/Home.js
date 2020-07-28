import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


function Recipes() {

  const [recipeList, updateRecipeList] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const recipes = await axios.get("https://api.airtable.com/v0/app2aVSXr4fYWwAdv/Table%201", {
        
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      updateRecipeList(recipes.data.records)
    }
    apiCall()
  }, [])

  return (

    <div>

      <h1>Recipe List</h1>
      {recipeList.map(recipe =>
          <>
          <h2 key={recipe.fields.title}><Link to={`/recipe/${recipe.id}`}>{recipe.fields.title}</Link></h2>
      <h3> {recipe.fields.created_at}</h3></>)
        }
        
      </div>
    
  );

}


export default Recipes