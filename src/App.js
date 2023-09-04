
import './App.css';
// import Product from './components/products';
import 'bootstrap/dist/css/bootstrap.min.css'
import {RootLayout} from './components/RootLayout'
import  Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
          <Route path='/' element={<RootLayout/>}>
             <Route index element={<Dashboard/>} />
             <Route path='/cart' element={<Cart />} />
          </Route>
    ))
    return (
      <div className="App">
         <RouterProvider router={router}/>
      </div>
    );
}

export default App;
