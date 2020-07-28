import React, { useState } from "react"
import axios from "axios"

function CreateRecipe(props) {
  const [title, updateTitle] = useState('')
  const [ingredients, updateIngredients] = useState('')
  const [steps, updateSteps] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("https://api.airtable.com/v0/app2aVSXr4fYWwAdv/Table%201", {
      fields: {
        ingredients: ingredients,
        title: title,
        steps: steps
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
 window.location.href="/"
  }

  return <form onSubmit={handleSubmit}>
    <h2>Add New Recipe</h2>
    <label htmlFor="title">Title</label>
    <input type="text" id="title" onChange={e => updateTitle(e.target.value)} value={title} />
    <label htmlFor="ingredients">Ingredients</label>
    <textarea type="text" id="ingredients" cols="30" rows="10" onChange={e => updateIngredients(e.target.value)} value={ingredients}></textarea>
    <label htmlFor="steps">Steps</label>
    <textarea type="text" id="steps" cols="30" rows="10" onChange={e => updateSteps(e.target.value)} value={steps}></textarea>
    <input type="submit" value="Add New Recipe" />
  </form>

}

export default CreateRecipe

