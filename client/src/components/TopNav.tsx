import { useMediaQuery } from "usehooks-ts"
import Logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom"
import { CgMenuRight, CgClose  } from "react-icons/cg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const TopNav = () => {

    const isMobile = useMediaQuery('(max-width: 540px)')
    const isTablet = useMediaQuery('(min-width: 540px) and (max-width: 768px)')

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()

    const handleClick = (path: string) => {
        setIsMenuOpen(!isMenuOpen)
        navigate(path)
    }

    return (
        <>
            {isMobile ? (
                <div className="py-3 px-4 flex justify-between items-center">
                    <img className="w-32" src={Logo} alt="" />
                    <span 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <CgMenuRight size={18} />
                    </span>
                    <ul className={`${isMenuOpen? 'flex' : 'hidden'} flex-col items-center justify-center space-y-6 bg-gray-800 text-white/80 absolute 
                        left-0 top-0 w-screen h-screen overflow-y-hidden z-10 transition duration-500 ease-in-out`}>
                        <li 
                            className="p-3 rounded-full bg-blue-800/70"
                            onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                            <CgClose  size={22}/>
                        </li>
                        <li className="p-2" onClick={()=>handleClick('/')}>
                            <Link to="/">About</Link>
                        </li>
                        <li className="p-2" onClick={()=>handleClick('/research')}>
                            <Link to="/research">Research</Link>
                        </li>
                        <li className="p-2" onClick={()=>handleClick('/people')}>
                            <Link to="/people">People</Link>
                        </li>
                        <li className="p-2" onClick={()=>handleClick('/publications')}>
                            <Link to="/publications">Publications</Link>
                        </li>
                        <li className="p-2" onClick={()=>handleClick('/news')}>
                            <Link to="/news">News</Link>
                        </li>
                        <li className="p-2" onClick={()=>handleClick('/activities')}>
                            <Link to="/activities">Activities</Link>
                        </li>
                    </ul>
                </div>
            ): (
                <div className={`py-4 ${isTablet ? 'px-4' : 'px-16 tv:px-64'} flex justify-between items-center`}>
                    <img className={`${isTablet && 'max-w-32'}`} src={Logo} alt="SMART LAB" />
                    <ul className={`${!isTablet ? 'space-x-6 text-sm': 'text-xs'} flex shrink`}>
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
                            <Link to="/publications">Publications</Link>
                        </li>
                        <li className="p-2 hover:bg-[#efefef]">
                            <Link to="/news">News</Link>
                        </li>
                        <li className="p-2 hover:bg-[#efefef]">
                            <Link to="/activities">Activities</Link>
                        </li>
                    </ul>
                </div>
            )}
        
        </>
    )
}

export default TopNav