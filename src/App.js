
import './App.css';
import Product from './components/products';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    ))
    return (
      <div className="App">
         <Product />
      </div>
    );
}

export default App;
