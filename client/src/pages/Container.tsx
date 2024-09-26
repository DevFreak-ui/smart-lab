import { Outlet, useLocation } from "react-router-dom";
import TopNav from "../components/TopNav";
import { useEffect } from "react";

const Container = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

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