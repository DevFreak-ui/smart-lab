import { Route, Routes } from "react-router-dom"
import Container from "../pages/Container"

const AppRoutes = () => {

    return(
        <Routes>
            <Route index element={<Container/>} />
        </Routes>
    )
}

export default AppRoutes