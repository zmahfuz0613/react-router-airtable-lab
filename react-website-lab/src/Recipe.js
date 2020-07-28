import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


function Recipe() {

  const params = useParams()
  const [recipe, updateRecipe] = useState({})

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(`https://api.airtable.com/v0/app2aVSXr4fYWwAdv/Table%201/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      updateRecipe(data.data.fields)
    }
    apiCall()
  }, [params])

  // Delete recipe

  const deleteRecipe = async () => {
    const data = await axios.delete(`https://api.airtable.com/v0/app2aVSXr4fYWwAdv/Table%201/${params.id}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    })
    updateRecipe(!recipe)
    window.location.href="/"

  }

  return <>
    <h1> {recipe.title}</h1>
    <h2>{recipe.ingredients} <br /><br />{recipe.steps}</h2>
    <button onClick={deleteRecipe}>delete</button>
  </>
}

export default Recipe

