import { FaGoogleScholar, FaGithub } from "react-icons/fa6"
import { BsFileEarmarkText, BsLinkedin  } from "react-icons/bs"
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import DummyProfile from "../assets/images/profiles/dummy-prof.png"
import { IoIosGlobe } from "react-icons/io";

interface facultyCardProps {
    image_src?: string,
    title: string,
    role: string,
    email: string,
    coordinates?: string,
    ofc_phone?: string,
    cv_link?: string,
    g_scholar_link?: string,
    linkedIn?: string,
    github?: string
}

interface studentCardProps {
    image_src?: string,
    name: string,
    res_interests?: string,
    site?: string,
    github?: string,
    linkedIn?: string,
    extra?: string
}

interface alumniCarProps {
    name: string,
    degree_completed?: string,
    year_completed?: string,
    co_advisor_name?: string,
    dissertation?: string,
    now_at?: string,
    extra?: React.ReactNode
}

const FacultyCard = (
    {image_src, title, role, email, coordinates, ofc_phone, cv_link, g_scholar_link, linkedIn, github}: 
    facultyCardProps ) => {

    return (
        <div className="text-sm sm:text-base sm:flex sm:space-x-10">
            <img className="max-w-48" src={image_src} alt="" />
            <div className="py-4 sm:p-2">
                <p className="pb-4 font-bold"> {title} </p>
                <p> {role} </p>

                {coordinates &&
                    <p>
                        <strong>Coordinates: </strong> {coordinates}
                    </p>
                }
                {ofc_phone &&
                    <p>
                        <strong>Office Phone: </strong> {ofc_phone}
                    </p>
                }

                <div className="flex gap-5 text-gray-500 pt-8">
                    <a href={g_scholar_link || "#"} className="hover:text-blue-500 hover:scale-110" target="_blank"><FaGoogleScholar  size={25} /></a>
                    <a href={cv_link || "#"} className="hover:text-blue-500 hover:scale-110" target="_blank"><BsFileEarmarkText  size={25} /></a>
                    <a href={linkedIn || "#"} className="hover:text-blue-500 hover:scale-110" target="_blank"><BsLinkedin  size={25} /></a>
                    <a href={github || "#"} className="hover:text-blue-500 hover:scale-110" target="_blank"><FaGithub  size={25} /></a>
                    <a href={`mailto:${email}` || "#"} className="hover:text-blue-500 hover:scale-110" target="_blank"><MdOutlineMarkEmailUnread  size={25} /></a>
                </div>

            </div>
        </div>
    )
}


const StudentCard = ({image_src, name, res_interests, site, github, linkedIn, extra}: studentCardProps) => {

    return(
        <div className="p-4 shadow rounded-md flex flex-col items-center text-center sm:text-left sm:flex-row space-x-2 md:space-x-6 text-xs md:text-sm md:min-w-[28rem] text-black/80 hover:shadow-md">
            {image_src ? (
                <img className="max-w-28 rounded" src={image_src} alt={name} />
            ): (
                <img className="max-w-28" src={DummyProfile} alt="Profile" />
            )}
            
            <div className="py-2 sm:py-0 sm:px-2">
                <p className="font-bold text-lg pb-2"> {name} </p>
                {res_interests && (
                    <p> 
                        <strong className="text-gray-500">Research Interests: </strong>
                        {res_interests}
                    </p>
                )}

                {/* Display EXtra Info */}
                {extra ? (
                    <p className="italic py-2"> {extra} </p>
                ): (
                    <div className="flex text-blue-300 space-x-4 mt-4 items-center justify-center sm:justify-start">
                        {site && (
                            <a href={site || "#"} className="hover:text-blue-500 hover:scale-110" target="_blank"><IoIosGlobe  size={23} /></a>
                        )}
                        {github && (
                            <a href={github || "#"} className="hover:text-blue-500 hover:scale-110" target="_blank"><FaGithub  size={20} /></a>
                        )}
                        {linkedIn && (
                            <a href={linkedIn || "#"} className="hover:text-blue-500 hover:scale-110" target="_blank"><BsLinkedin  size={18} /></a>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

const AlumniCard = ({name, degree_completed, year_completed, co_advisor_name, dissertation, now_at, extra}: alumniCarProps) => {
    return (
        <div className="text-md flex items-start">
            {/* Hollow Circle */}
            <div className="w-2 h-2 border-2 border-gray-400 rounded-full mt-1 mr-2"></div>
            
            <div>
                {/* Student Name */}
                <a href="#" className="text-blue-500">{name}</a>,

                {/* Title of Degree Completed */}
                <span> {degree_completed} </span>

                {/* Year of Degree Completion */}
                {year_completed && <span> ({year_completed}), </span>}

                {/* Co-Advisor */}
                {co_advisor_name && (
                    <>
                    <strong>co-advised by </strong> 
                    <span>{co_advisor_name}</span>, 
                    </>
                )}
                
                {/* Dissertation */}
                {dissertation && (
                    <>
                    <strong> Dissertation: </strong>
                    <span>{dissertation}</span>, 
                    </>
                )}

                {/* Current Institution */}
                {now_at &&  (
                    <>
                    <strong><i> Now at: </i></strong>
                    <span>{now_at}</span>, 
                    </>
                )}

                {/* Extra Info */}
                <span> {extra} </span>
            </div>
        </div>
    )
}


export {FacultyCard, StudentCard, AlumniCard}