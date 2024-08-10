import { Outlet } from "react-router-dom"
import TopNav from "../components/TopNav"

const Container = () => {

    return(
        <>
			<div className="antialiased text-black max-w-screen">
                <TopNav />

				<main className="w-full">

					{/* LOAD PAGES */}
					<Outlet />

				</main>
			</div>
		</>
    )
}

export default Container