import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <>
      <NavBar />
      <ItemListContainer greeting={"Te damos la bienvenida a nuestro shop :)"}/>
  </>
  )
}

export default App;
