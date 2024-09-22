import { Outlet } from "react-router-dom"
import TopNav from "../components/TopNav"

const Container = () => {

    return(
        <>
			<div className="antialiased text-black max-w-screen">
                <div className="sticky top-0 z-50 bg-gray-100">
                    <TopNav />
                </div>

				<main className="w-full">

					{/* LOAD PAGES */}
					<Outlet />

				</main>
			</div>
		</>
    )
}

export default Container