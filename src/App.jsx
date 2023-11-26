import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Editarticle from "./components/articles/Editarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Listarticle from "./components/articles/Listarticle";
import Editcategorie from "./components/categories/Editcategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Listcategorie from "./components/categories/Listcategorie";
import Editscategorie from "./components/scategories/Editscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Listscategorie from "./components/scategories/Listscategorie";
import Viewcategorie from "./components/categories/Viewcategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";
import Viewarticle from "./components/articles/Viewarticle";

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {

  return (

  <>
    <Router>
<Menu/>
      <Routes>
<Route path="/articles" element={<Listarticle/>}/>
<Route path="/articles/add" element={<Insertarticle/>}/>
<Route path="/article/edit/:id" element={<Editarticle/>}/>
<Route path="/article/view/:id" element={<Viewarticle/>}/>
<Route path="/categories" element={<Listcategorie/>}/>
<Route path="/categories/add" element={<Insertcategorie/>}/>
<Route path="/categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/categories/view/:id" element={<Viewcategorie/>}/>
<Route path="/scategories"  element={<Listscategorie/>}/>
<Route path="/scategories/add" element={<Insertscategorie/>}/>
<Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
<Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
      </Routes>
    </Router>
    
  </>
    
  )
}

export default App
