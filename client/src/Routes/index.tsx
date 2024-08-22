import { Route, Routes } from "react-router-dom"
import Container from "../pages/Container"
import HomePage from "../pages/Home"
import NewsPage from "../pages/News"
import ActivitiesPage from "../pages/Activities"
import PeoplesPage from "../pages/People"
import ResearchPage from "../pages/Research"
import PublicationsPage from "../pages/Publication"

const AppRoutes = () => {

    return(
        <Routes>

            <Route path="/" element={<Container />} >
                <Route index element={<HomePage />} />
                <Route path="/research" element={<ResearchPage />} />
                <Route path="/publications" element={<PublicationsPage />} />
                <Route path="/activities" element={<ActivitiesPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/people" element={<PeoplesPage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes