import React from 'react';
import { Route, Link } from "react-router-dom"
import Home from './Home'

function App() {

  return (
    <>
      <nav>
        {/* Homepage, Recipes */}
        
        <Link to="/">Home</Link>
        
      </nav>

      <Route path="/" exact>

        <Home />
      </Route>

    </>
  );
}

export default App;
