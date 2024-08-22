import HeroBg from "../assets/images/people-hero-bg.png"
import { FacultyCard, StudentCard, AlumniCard } from "../components/PeopleCard"
import Armstrong from "../assets/images/profiles/pi.png"
import Blessing from "../assets/images/profiles/blessing.png"
import Joshua from "../assets/images/profiles/joshua.png"
import Kian from "../assets/images/profiles/Kian.png"

const PeoplesPage = () => {

    return (
        <div className="text-black/80">

            {/* HERO */}
            <section className="w-full max-h-[40vh] overflow-y-hidden relative">
                <img src={HeroBg} alt="Group Picture" width={'100%'} />
                <div className="w-full h-full absolute bg-black/50 flex items-center justify-center top-0">
                    <h1 className="text-[27px] font-black text-white/90">People</h1>
                </div>
            </section>

            {/* FACULTY */}
            <section className="my-12 sm:my-28 w-4/5 md:w-3/5 tv:w-2/5 mx-auto">
                <h1 className="text-xl font-medium mb-12">Faculty</h1>
                
                <FacultyCard 
                    image_src={Armstrong}
                    title="PI - Armstrong Aboah"
                    role="Assistant Professor, Civil Engineering"
                    email="aboah1994@gmail.com"
                    coordinates="Civil Engineering Building, CE 201D"
                    ofc_phone="9312847657"
                    />
                <hr className="bg-gray-300 my-6 md:my-12" />
            </section>

            {/* STUDENTS */}
            <section className="my-12 md:my-24 w-4/5 md:w-3/5 tv:w-2/5 mx-auto">
                <h1 className="text-xl font-medium mb-8">PhD Students</h1>
                
                <div className="grid lg:grid-cols-2 gap-x-24 gap-y-12">
                    <StudentCard 
                        name="Blessing Agyei Kyem"
                        res_interests="Computer Vision, Multimodal Ai, Applications in Transport Systems"
                        image_src={Blessing}
                        />
                    <StudentCard
                        name="Joshua Asamoah"
                        res_interests="Transport Systems, IoT"
                        image_src={Joshua}
                        />
                    <StudentCard 
                        name="Eugene Denteh"
                        res_interests="Multimodal AI, Healthcare Applications, Computer Vision, NLP"
                        extra="Joining Fall 2024"
                        />
                </div>
            </section>

            {/* OTHERS(MASTERS & UNDERGRADS) */}
            <section className="my-24 w-4/5 md:w-3/5 tv:w-2/5 mx-auto">
                <h1 className="text-xl font-medium mb-8">Masters & Undergraduates</h1>
                
                <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
                    <StudentCard 
                        name="Kian Ansarinejad"
                        res_interests="Transport Systems"
                        image_src={Kian}
                        extra="Currently a Masters Student at X university"
                        />
                </div>
            </section>

            {/* VISITORS */}
            <section className="my-24 w-3/5 md:w-3/5 tv:w-2/5 mx-auto">
                <h1 className="text-xl font-medium mb-6">Visitors</h1>

                <p className="text-gray-400 text-sm"> -- No data --</p>

            </section>

            {/* ALUMNI */}
            <section className="my-24 w-4/5 md:w-3/5 tv:w-2/5 mx-auto">
                <h1 className="text-xl font-medium mb-6">Alumni</h1>
                
                <AlumniCard 
                    name="Fatima Ezahra Chrit"
                    degree_completed="PhD Mechanical Engineering"
                    year_completed="2023"
                    co_advisor_name="A. Alexeev"
                    dissertation="Modeling and simulation of cells and particles in microfluidic channels"
                    now_at="IronCAD"/>
            </section>

        </div>
    )
}


export default PeoplesPage