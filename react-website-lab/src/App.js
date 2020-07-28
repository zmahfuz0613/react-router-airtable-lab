import React from 'react';
import { Route, Link } from "react-router-dom"
import Home from './Home'
import CreateRecipe from './CreateRecipe';
import Recipe from "./Recipe"
function App() {

  return (
    <>
      <nav>
        {/* Homepage, Recipes */}

        <Link to="/">Home</Link>

        <Link to="/addrecipe">Add Recipe</Link>
      </nav>

      <Route path="/" exact>

        <Home />
      </Route>
      <Route path="/addrecipe">

        <CreateRecipe />
      </Route>
      <Route path="/recipe/:id">

        <Recipe />
      </Route>
    </>
  );
}

export default App;
