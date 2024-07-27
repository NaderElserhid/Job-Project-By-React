import { Outlet } from "react-router-dom"; 
import Navbar from "../components/Navebar"

const MainLayout = () => {
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default MainLayout