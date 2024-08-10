import Logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom"

const TopNav = () => {

    return (
        <div className="py-4 px-16 flex justify-between items-center">
            <img src={Logo} alt="" />
            <ul className="flex space-x-6 shrink text-sm">
                <li className="p-2 hover:bg-[#efefef]">
                    <Link to="/">About</Link>
                </li>
                <li className="p-2 hover:bg-[#efefef]">
                    <Link to="/research">Research</Link>
                </li>
                <li className="p-2 hover:bg-[#efefef]">
                    <Link to="/people">People</Link>
                </li>
                <li className="p-2 hover:bg-[#efefef]">
                    <Link to="/news">News</Link>
                </li>
                <li className="p-2 hover:bg-[#efefef]">
                    <Link to="/activities">Activities</Link>
                </li>
            </ul>
        </div>
    )
}

export default TopNav