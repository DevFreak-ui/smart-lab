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
        <div className="flex space-x-10">
            <img className="max-w-48" src={image_src} alt="" />
            <div className="p-2">
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
                    <a href={g_scholar_link || "#"} target="_blank"><FaGoogleScholar  size={25} /></a>
                    <a href={cv_link || "#"} target="_blank"><BsFileEarmarkText  size={25} /></a>
                    <a href={linkedIn || "#"} target="_blank"><BsLinkedin  size={25} /></a>
                    <a href={github || "#"} target="_blank"><FaGithub  size={25} /></a>
                    <a href={`mailto:${email}` || "#"} target="_blank"><MdOutlineMarkEmailUnread  size={25} /></a>
                </div>

            </div>
        </div>
    )
}


const StudentCard = ({image_src, name, res_interests, site, github, linkedIn, extra}: studentCardProps) => {

    return(
        <div className="p-4 shadow rounded-md flex space-x-10 text-sm min-w-[30rem] text-black/80 hover:shadow-md">
            {image_src ? (
                <img className="max-w-28 rounded" src={image_src} alt={name} />
            ): (
                <img className="max-w-28" src={DummyProfile} alt="Profile" />
            )}
            
            <div className="px-2">
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
                    <div className="flex text-blue-300 space-x-4 mt-4 items-center">
                        <a href={site || "#"} target="_blank"><IoIosGlobe  size={23} /></a>
                        <a href={github || "#"} target="_blank"><FaGithub  size={20} /></a>
                        <a href={linkedIn || "#"} target="_blank"><BsLinkedin  size={18} /></a>
                    </div>
                )}
            </div>
        </div>
    )
}
// interface alumniCarProps {
//     name: string,
//     degree_completed?: string,
//     year_completed?: string,
//     co_advisor_name?: string,
//     dissertation?: string,
//     now_at?: string,
//     extra?: React.ReactNode
// }

const AlumniCard = ({name, degree_completed, year_completed, co_advisor_name, dissertation, now_at, extra}: alumniCarProps) => {
    return (
        <div className="text-sm">
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
    )
}


export {FacultyCard, StudentCard, AlumniCard}