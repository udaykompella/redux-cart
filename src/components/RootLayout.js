import {Outlet} from 'react-router-dom' 
import NavBar from './NavBarPanel'
import Product from './products'
import store from '../store/store'
import { Provider } from 'react-redux'
export const RootLayout = () => {
    return(
        <>
        <Provider store={store}>

            <NavBar />
            {/* <Product/> */}

            <main>
                <Outlet />
            </main>
        </Provider>
        </>
    )
}