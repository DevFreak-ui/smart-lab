
import { MdEmail, MdLanguage } from "react-icons/md"

interface PersonGridCardProps {
    image_src: string
    name: string
    role: string
    email: string
    website?: string
    interests: string
}

export const PersonGridCard: React.FC<PersonGridCardProps> = ({
    image_src,
    name,
    role,
    email,
    website,
    interests
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-80 overflow-hidden">
                <img src={image_src} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
                <p className="text-indigo-600 font-semibold mb-3">{role}</p>
                <p className="text-gray-600 text-sm mb-3"><span className="font-semibold">Interests:</span> {interests}</p>
                <div className="flex space-x-2">
                    <a href={`mailto:${email}`} className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-colors duration-300">
                        <MdEmail />
                        <span>Email</span>
                    </a>
                    {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors duration-300">
                            <MdLanguage />
                            <span>Website</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
