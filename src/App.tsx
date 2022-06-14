import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage"

import './index.css'

function App() {
  return (
    <div  className="m-0 w-full h-full block">
      <div  className="flex flex-col min-h-full">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div> 
    </div>
    
  )
}

export default App
