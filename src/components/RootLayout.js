import {Outlet} from 'react-router-dom' 
import NavBar from './NavBarPanel'
export const RootLayout = () => {
    return(
        <>
            <NavBar />

            <main>
                <Outlet />
            </main>
        </>
    )
}