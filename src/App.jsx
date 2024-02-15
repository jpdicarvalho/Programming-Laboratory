import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          
          <Route path='/Programming-Laboratory' element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
