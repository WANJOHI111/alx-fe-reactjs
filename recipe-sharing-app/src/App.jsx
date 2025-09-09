import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import Navbar from "./components/Navbar";
import SearchBar from './components/SearchBar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
       <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </div>
     <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>

    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
