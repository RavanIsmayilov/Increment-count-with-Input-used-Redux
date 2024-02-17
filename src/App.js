import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Counter from './pages/counter';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/counter' element={<Counter/>}/>
        </Routes>
      </Router>
  );
}

export default App;
