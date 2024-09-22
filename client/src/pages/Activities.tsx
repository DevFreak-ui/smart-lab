interface ActivityCardProps {
    title: string;
    image: string;
    description: string;
}

interface GroupPhotoProps {
    src: string;
    caption: string;
}

import Footer from "../components/Footer";
import HeroBg from "../assets/images/people-hero-bg.png"

// Import images from gallery
import Transport from "../assets/gallery/sim_001.jpg";
import LabMeeting from "../assets/gallery/group_7.jpeg";
import DroneShot from "../assets/images/drone_shot.jpg";
import Conference from "../assets/images/its_heartland.jpg";
import Celebration from "../assets/gallery/group_8.jpeg";

const ActivitiesPage = () => {
    const researchActivities = [
        { title: "Field Research", image: DroneShot, description: "Conducting on-site data collection and analysis for transportation studies." },
        { title: "Lab Experiments", image: Transport, description: "Using advanced simulation tools to model complex transportation scenarios." },
    ];

    const labEvents = [
        { src: LabMeeting, caption: "End of the month lab dinner - August 2024" },
        { src: Celebration, caption: "End of the month lab dinner - July 2024" },
        { src: Conference, caption: "First place poster at ITS Heartland Annual Meeting" },
    ];

    return (
        <div className="w-full text-black/80">
            
            {/* HERO */}
            <section className="w-full max-h-[40vh] overflow-y-hidden relative">
                <img src={HeroBg} alt="Group Picture" width={'100%'} />
                <div className="w-full h-full absolute bg-black/50 flex flex-col items-center justify-center top-0">
                    <h1 className="text-[27px] font-black text-white/90">Activities</h1>
                    <h4 className="text-white/90 text-center">
                        Advancing transportation research through innovative approaches and collaborative efforts
                    </h4>
                </div>
            </section>

            {/* RESEARCH ACTIVITIES */}
            <section className="my-12 md:my-32 p-4 w-4/5 md:w-3/5 tv:w-2/5 mx-auto">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-medium mb-8">Our Research Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {researchActivities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>
            </section>

            {/* LAB EVENTS */}
            <section className="my-12 md:my-32 p-4 w-4/5 md:w-3/5 tv:w-2/5 mx-auto">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-medium mb-8">Lab Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {labEvents.map((event, index) => (
                        <GroupPhoto key={index} {...event} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

const ActivityCard = ({ title, image, description }: ActivityCardProps) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const GroupPhoto = ({ src, caption }: GroupPhotoProps) => (
    <div className="relative group">
        <img src={src} alt={caption} className="w-full h-64 object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end justify-center">
            <p className="text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{caption}</p>
        </div>
    </div>
);

export default ActivitiesPage;
