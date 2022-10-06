import './App.css';
import NavBar from './components/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />}></Route>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
