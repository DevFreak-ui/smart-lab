import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail, MdLanguage } from "react-icons/md"

interface PersonCardProps {
    image_src: string
    name: string
    role: string
    background: string
    interests: string
    email?: string
    github?: string
    linkedin?: string
    website?: string
}

export const PersonCard: React.FC<PersonCardProps> = ({
    image_src,
    name,
    role,
    background,
    interests,
    email,
    github,
    linkedin,
    website,
    ...rest
}) => {
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            {...rest}>
            <div className="w-full md:w-1/3 h-64 md:h-auto">
                <img src={image_src} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
                    <p className="text-indigo-600 font-semibold mb-4">{role}</p>
                    <p className="text-gray-600 mb-4">{background}</p>
                    <p className="text-gray-700"><span className="font-semibold">Research Interests:</span> {interests}</p>
                </div>
                <div className="flex sm:space-x-4 mt-6 flex-wrap">
                    {email && (
                        <a href={`mailto:${email}`} className="text-sm sm:text-base bg-blue-500 text-white m-1 px-3 sm:px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-colors duration-300">
                            <MdEmail />
                            <span>Email</span>
                        </a>
                    )}
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base bg-gray-800 text-white m-1 px-3 sm:px-4 py-py-2 rounded-full flex items-center space-x-2 hover:bg-gray-900 transition-colors duration-300">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                    )}
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base bg-blue-700 text-white m-1 px-3 sm:px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-800 transition-colors duration-300">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                    )}
                    {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base bg-green-500 text-white m-1 px-3 sm:px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors duration-300">
                            <MdLanguage />
                            <span>Website</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}