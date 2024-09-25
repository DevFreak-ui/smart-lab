import Brand from "../assets/images/hero-brand.svg"
import Armstrong from "../assets/images/profiles/pi.png"
import GalleryImage1 from "../assets/gallery/group_7.jpeg"
import GalleryImage2 from "../assets/gallery/simulator_6.jpeg"
import GalleryImage3 from "../assets/gallery/group_3.jpeg"
import GalleryImage4 from "../assets/gallery/group_6.jpeg"
import GalleryImage5 from "../assets/gallery/simulator_3.jpeg"
import NewsItem from "../components/News"
import Footer from "../components/Footer"
import HeroImage from "../assets/gallery/setup_1.jpeg"
import Paralax from "../assets/gallery/simulator_3.jpeg"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import Proj1 from "../assets/images/project_thumbs/anomaly.jpg"
import Pavement from "../assets/images/project_thumbs/pavement.gif"
import Gaze from "../assets/images/project_thumbs/gaze.png"

const HomePage = () => {
    
    return (
        <div className="w-full">
            
            {/* HERO SECTION */}
            <section className={`bg-cover bg-center bg-no-repeat w-full h-[90vh] tv:h-[70vh] flex flex-col text-white/90 justify-center items-center p-6 text-center relative`}
            style={{ backgroundImage: `url(${HeroImage})`}}>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img src={Brand} alt="SMART Lab" className="max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] z-20" />
                <p className="text-2xl lg:text-3xl xl:text-4xl my-16 z-20">Welcome</p>
                <p className="text-lg lg:text-xl xl:text-2xl !my-0 z-20">to</p>
                <p className="mt-8 text-lg lg:text-xl xl:text-2xl max-w-3xl z-20">
                The <strong>S</strong>ustainable <strong>M</strong>obility and <strong>A</strong>dvanced <strong>R</strong>esearch in <strong>T</strong>ransportation Group
                </p>
                <div className="absolute bottom-0 left-0 text-white bg-yellow-500/80 w-full md:w-1/5 tv:w-full text-left text-md p-4 z-20">
                    <p>Prospective students interested in joining the lab? 
                        <Link className="mx-3 underline text-blue-500" to="/prospective-student-info">See this</Link>
                    </p>
                </div>
            </section>

            {/* PROFILE */}
            <section className="my-12 md:my-32 p-4 flex flex-col-reverse md:flex-row w-4/5 md:w-3/5 tv:w-2/5 mx-auto gap-8">
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-6">About Dr. Armstrong Aboah</h2>
                    <p className="text-justify text-sm sm:text-base leading-6 md:leading-7 text-black/80 mb-4">
                    Dr. Armstrong Aboah is a distinguished Transportation Data Scientist and Assistant Professor 
                    at North Dakota State University. With a proven track record of innovative research and extensive hands-on 
                    experience, he specializes in developing cutting-edge statistical modeling techniques and advanced computer 
                    vision systems, all designed to enhance transportation system management and operations.
                    </p>
                    <p className="text-justify text-sm sm:text-base leading-6 md:leading-7 text-black/80 mb-4">
                    His work spans across various domains of transportation engineering and data science, where he has served as both 
                    architect and application developer, utilizing machine learning models to tackle large-scale, complex challenges 
                    in urban mobility and transportation safety.
                    </p>
                    <p className="text-justify text-sm sm:text-base leading-6 md:leading-7 text-black/80">
                    Dr. Aboah received his PhD from the University of Missouri-Columbia, under the mentorship of Dr. Yaw Adu-Gyamfi, 
                    and has since been at the forefront of integrating data-driven approaches into transportation research and education.
                    </p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center items-start md:pt-16">
                    <img src={Armstrong} alt="Dr. Armstrong Aboah" className="w-full max-w-[300px] object-cover rounded-lg shadow-lg" />
                </div>
            </section>

            {/* RESEARCH */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0" style={{ backgroundImage: `url(${Paralax})` }}></div>
                <div className="relative z-10 bg-black/60 h-full flex flex-col justify-center items-center text-white">
                    <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/2 bg-black/40 p-8 rounded-lg backdrop-blur-sm">
                        <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-8 text-center">Our Research</h1>
                        <p className="hidden md:block text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 text-center">
                        At the SMART Lab, we leverage cutting-edge technologies to revolutionize transportation:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                            <div className="bg-white/10 p-4 md:p-6 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
                                <h3 className="text-lg md:text-xl font-semibold mb-3">Big Data Analytics</h3>
                                <p className="text-sm md:text-base">Analyzing large-scale transportation datasets for insights</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
                                <h3 className="text-lg md:text-xl font-semibold mb-3">Artificial Intelligence</h3>
                                <p className="text-sm md:text-base">Developing machine learning models for predictive modeling</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
                                <h3 className="text-lg md:text-xl font-semibold mb-3">Internet of Things</h3>
                                <p className="text-sm md:text-base">Deploying IoT devices for infrastructure monitoring and safety</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
                                <h3 className="text-lg md:text-xl font-semibold mb-3">Traffic Optimization</h3>
                                <p className="text-sm md:text-base">Enhancing traffic flow and infrastructure capacity planning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEWS */}
            <section className="my-16 md:my-32 lg:my-40 xl:my-48 w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/2 mx-auto">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-8">Latest News</h2>
                <NewsItem 
                    date="AUG 15, 2023" 
                    details={
                        <p className="text-base lg:text-md xl:text-lg">Dr. Aboah awarded a seed grant from AI SUSTEIN for smart city transportation research.</p>
                    } 
                />
                <NewsItem 
                    date="JUL 02, 2023" 
                    details={
                        <p className="ttext-base lg:text-md xl:text-lg">SMART Lab's AI-driven traffic optimization system implemented in Fargo, ND.</p>
                    } 
                />
                <NewsItem 
                    date="JUN 10, 2023" 
                    details={
                        <p className="text-base lg:text-md xl:text-lg">Welcoming two new Ph.D. students, Blessing and Joshua, to the SMART Lab team.</p>
                    } 
                />
                <div className="mt-8 text-center">
                    <Link to="/news" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Read More
                    </Link>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="my-16 md:my-32 w-full md:w-4/5 px-8 tv:w-3/5 mx-auto">
                <h2 className="text-lg lg:text-xl xl:text-3xl tv:text-4xl font-bold mb-12 text-center">Our Recent Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative pb-24">
                        <div className="overflow-hidden shadow-lg">
                            <img src={Proj1} alt="Traffic Anomaly Detection" className="w-full h-52 object-cover" />
                        </div>
                        <div className="absolute bottom-0 left-4 right-4 bg-blue-900 text-white rounded-lg shadow-lg p-4">
                            <h3 className="text-xl font-semibold mb-2">Traffic Anomaly Detection</h3>
                            <p className="text-sm mb-4">Vision-based system for detecting traffic anomalies using deep learning.</p>
                            <Link to="/research" className="text-blue-300 hover:text-blue-100 flex items-center">
                                Read More <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative pb-24">
                        <div className="overflow-hidden shadow-lg">
                            <img src={Pavement} alt="Pavement Condition Analysis" className="w-full h-52 object-cover" />
                        </div>
                        <div className="absolute bottom-0 left-4 right-4 bg-blue-900 text-white rounded-lg shadow-lg p-4">
                            <h3 className="text-xl font-semibold mb-2">Pavement Condition Analysis</h3>
                            <p className="text-sm mb-4">Multitask learning framework for estimating pavement condition indices from images.</p>
                            <Link to="/research" className="text-blue-300 hover:text-blue-100 flex items-center">
                                Read More <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative pb-24">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src={Gaze} alt="Gaze-Guided Analysis" className="w-full h-52 object-cover" />
                        </div>
                        <div className="absolute bottom-0 left-4 right-4 bg-blue-900 text-white rounded-lg shadow-lg p-4">
                            <h3 className="text-xl font-semibold mb-2">Gaze-Guided Analysis</h3>
                            <p className="text-sm mb-4">GazeGNN: A gaze-guided graph neural network for chest X-ray classification.</p>
                            <Link to="/research" className="text-blue-300 hover:text-blue-100 flex items-center">
                                Read More <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* MEMORY */}
            <section className="my-16 md:my-32 xl:my-38 w-4/5 lg:w-3/4 xl:w-2/3 mx-auto">
                <h2 className="text-lg lg:text-xl xl:text-3xl tv:text-4xl font-bold mb-8 text-center">Gallery</h2>
                <div className="grid grid-cols-3 gap-3">
                    <img className="col-span-2 row-span-2 w-full h-64 object-cover rounded-lg shadow-lg" src={GalleryImage1} alt="SMART Lab mEMBERS" />
                    <img className="w-full h-32 object-cover rounded-lg shadow-lg" src={GalleryImage2} alt="Team collaboration" />
                    <img className="w-full h-32 object-cover rounded-lg shadow-lg" src={GalleryImage3} alt="Lab equipment" />
                    <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={GalleryImage4} alt="Conference presentation" />
                    <img className="col-span-2 row-span-2 w-full h-64 object-cover rounded-lg shadow-lg" src={GalleryImage5} alt="Field work" />
                </div>
            </section>

            {/* FOOTER */}
            <Footer />

        </div>
    )
}

export default HomePage