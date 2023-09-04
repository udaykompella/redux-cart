import {Outlet} from 'react-router-dom' 
import NavBar from './NavBarPanel'
import Product from './products'
export const RootLayout = () => {
    return(
        <>
            <NavBar />
            {/* <Product/> */}

            <main>
                <Outlet />
            </main>
        </>
    )
}