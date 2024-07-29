import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Listlivres from "./components/admin/livres/Listlivres";
import Insertlivre from "./components/admin/livres/Insertlivre";
import Editlivre from "./components/admin/livres/Editlivre";
import Menu from "./components/Menu";
import Listlivrescard from "./components/client/Listlivrescard";
import "./App.css"
import Listauteurs from './components/admin/auteurs/Listauteurs';
import Listediteurs from './components/admin/editeurs/Listediteurs';

function App() {
  

  return (
    <>
      <Router>
      <Menu />
        <Routes>
          <Route path="/livres" element={<Listlivres />} />
          <Route path="/livres/add" element ={<Insertlivre />} />
          <Route path="/livres/edit" element = {<Editlivre />} />
          <Route path="/livres/card" element= {<Listlivrescard />}/>
          <Route path="/auteurs" element={<Listauteurs />} />
          <Route path="/editeurs" element={<Listediteurs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
