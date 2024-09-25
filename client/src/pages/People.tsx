import HeroBg from "../assets/images/people-hero-bg.png"
import { FacultyCard, StudentCard, AlumniCard } from "../components/PeopleCard"
import Armstrong from "../assets/images/profiles/pi.png"
import Blessing from "../assets/images/profiles/blessing.png"
import Joshua from "../assets/images/profiles/joshua.png"
import Eugene from "../assets/images/profiles/eugene.jpg"
import Kian from "../assets/images/profiles/Kian.png"
import { PersonCard } from "../components/PersonCard"
import { PersonGridCard } from "../components/PersonGridCard"
import { useState } from 'react'
import { BsViewList, BsGrid3X3GapFill } from "react-icons/bs"

const ViewIcon = ({ mode, currentMode }: { mode: string; currentMode: string }) => {
  const isActive = mode === currentMode
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke={isActive ? "none" : "currentColor"} strokeWidth="2">
      {mode === 'A' && (
        <BsViewList />
      )}
      {mode === 'B' && (
        <BsGrid3X3GapFill />
      )}
    </svg>
  )
}

const PeoplesPage = () => {
    const [viewMode, setViewMode] = useState('A')

    const toggleView = (mode: string) => {
        setViewMode(mode)
    }

    return (
        <div className="text-black/80">

            {/* HERO */}
            <section className="w-full max-h-[40vh] overflow-y-hidden relative">
                <img src={HeroBg} alt="Group Picture" width={'100%'} />
                <div className="w-full h-full absolute bg-black/50 flex items-center justify-center top-0">
                    <h1 className="text-[27px] font-black text-white/90">People</h1>
                </div>
            </section>

            {/* Toggle Buttons */}
            <div className="flex justify-center pt-8 space-x-4">
                {['A', 'B'].map((mode) => (
                    <button key={mode} onClick={() => toggleView(mode)} className={`flex items-center space-x-2 ${viewMode === mode ? 'text-indigo-600' : 'text-gray-400'}`}>
                        <ViewIcon mode={mode} currentMode={viewMode} />
                    </button>
                ))}
            </div>

            {viewMode === 'A' && (
                // Detailed card view
                <div className="w-4/5 md:w-3/5 tv:w-2/5 mx-auto my-12">
                    <div className="space-y-12">

                        {/* FACULTY */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Faculty</h2>
                            <PersonCard 
                                image_src={Armstrong}
                                name="Armstrong Aboah"
                                role="PI, Assistant Professor, Civil Engineering"
                                background="Dr. Aboah specializes in sustainable transportation systems and smart city technologies. 
                                            He received his PhD from the University of Missouri-Columbia under the guidance of Prof. 
                                            Yaw Adu-Gyamfi, and has been at the forefront of integrating data-driven approaches into 
                                            transportation research and education."
                                interests="Sustainable transportation, Smart cities, AI in civil engineering, Big Data Analytics, Traffic Optimization"
                                f_email="aboah1994@gmail.com"
                                github="https://github.com/aboah1994"
                                website="https://aboah1994.github.io/"
                            />
                        </div>

                        {/* STUDENTS */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-indigo-700">PhD Students</h2>
                            <div className="space-y-8">
                                <PersonCard 
                                    image_src={Blessing}
                                    name="Blessing Agyei Kyem"
                                    role="PhD Student"
                                    background="Blessing is a passionate Ai researcher whose work falls at the intersection of Computer Vision and NLP. 
                                                His current focus is on Multi-modal models for computer vision and their applications in Transportation. 
                                                Before that, he completed his BSc in Civil Engineering from KNUST."
                                    interests="Computer Vision, Multimodal AI, Applications in Transport Systems"
                                    linkedin="https://www.linkedin.com/in/blessing-agyei-kyem-b258121a8"
                                    website="https://blessing-agyei-kyem.github.io/"
                                />
                                <PersonCard 
                                    image_src={Joshua}
                                    name="Joshua Asamoah"
                                    role="PhD Student"
                                    background="Joshua earned his bachelor's degree in Civil Engineering from KNUST. 
                                                During this time, he interned with Ghana Highway Authority where he 
                                                developed skills and curiosity of the potential benefit of integrating IoT in Ghana's transportation system.
                                                He joined the lab in 2023 to pursue a PhD in Civil Engineering with focus on the application of IoT in 
                                                transportation systems."
                                    interests="Transport Systems, IoT, Multimodal AI"
                                    linkedin="https://www.linkedin.com/in/joshua-kofi-asamoah-1ba4091a2/"
                                />
                                <PersonCard 
                                    image_src={Eugene}
                                    name="Eugene Denteh"
                                    role="Incoming PhD Student"
                                    background="Eugene is an incoming PhD student at the with focus on smart cities. 
                                                Aside that, he is passionate about developing smart transportation systems, 
                                                energy-efficient buildings, and other infrastructure that can be managed 
                                                and optimized using data and analytics. He completed his BSc in Civil Engineering from KNUST."
                                    interests="Smart Cities, Smart Transportation Systems, Energy-efficient Buildings, Data Analytics"
                                    email="edenteh5@gmail.com"
                                    // github="https://github.com/KODEZILLA5"
                                    linkedin="https://www.linkedin.com/in/eugene-denteh-50aa0217a/"
                                />
                            </div>
                        </div>

                        {/* OTHERS(MASTERS & UNDERGRADS) */}
                        <section className="!my-24 mx-auto">
                            <h1 className="text-xl font-medium mb-8">Collaborators</h1>
                            
                            <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
                                <StudentCard 
                                    name="Kian Ansarinejad"
                                    res_interests="Transport Systems"
                                    image_src={Kian}
                                    extra="Currently a Masters Student"
                                    />
                            </div>
                        </section>

                        {/* ALUMNI */}
                        <div className="my-24">
                            <h1 className="text-xl font-medium mb-6">Alumni</h1>
                            
                            <AlumniCard 
                                name="Fatima Ezahra Chrit"
                                degree_completed="PhD Mechanical Engineering"
                                year_completed="2023"
                                co_advisor_name="A. Alexeev"
                                dissertation="Modeling and simulation of cells and particles in microfluidic channels"
                                now_at="IronCAD"/>
                        </div>
                    </div>
                </div>
            )}

            {viewMode === 'B' && (
                // Grid view
                <div className="w-4/5 mx-auto my-12">
                    
                    {/* Faculty Section */}
                    <h2 className="text-xl font-semibold mb-4">Faculty</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <PersonGridCard 
                            image_src={Armstrong}
                            name="Armstrong Aboah"
                            role="PI, Assistant Professor"
                            email="aboah1994@gmail.com"
                            website="https://aboah1994.github.io/"
                            interests="Sustainable transportation, Smart cities, AI in civil engineering"
                        />
                    </div>

                    {/* Students Section */}
                    <h2 className="text-xl font-semibold mb-4 mt-32">Students</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <PersonGridCard 
                            image_src={Blessing}
                            name="Blessing Agyei Kyem"
                            role="PhD Student"
                            email=""
                            interests="Computer Vision, Multimodal AI, Applications in Transport Systems"
                        />
                        <PersonGridCard 
                            image_src={Joshua}
                            name="Joshua Asamoah"
                            role="PhD Student"
                            email=""
                            interests="Transport Systems, IoT, Deep Learning, Multimodal AI"
                        />
                        <PersonGridCard 
                            image_src={Eugene}
                            name="Eugene Denteh"
                            role="Incoming PhD Student"
                            email=""
                            interests="Smart Cities, Smart Transportation Systems, Energy-efficient Buildings, Data Analytics"
                        />
                    </div>

                    {/* ALUMNI */}
                    <div className="my-24">
                        <h1 className="text-xl font-medium mb-6">Alumni</h1>
                        
                        <AlumniCard 
                            name="Fatima Ezahra Chrit"
                            degree_completed="PhD Mechanical Engineering"
                            year_completed="2023"
                            co_advisor_name="A. Alexeev"
                            dissertation="Modeling and simulation of cells and particles in microfluidic channels"
                            now_at="IronCAD"/>
                    </div>
                </div>
            )}

        </div>
    )
}

export default PeoplesPage