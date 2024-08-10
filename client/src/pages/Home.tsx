import Brand from "../assets/images/hero-brand.svg"
import Armstrong from "../assets/images/pi.png"
import MemoryImage from "../assets/images/memoryImage.png"
import NewsItem from "../components/News"
import Footer from "../components/Footer"
import HeroImage from "../assets/images/hero-home-bg.png"
import ListStyle1 from "../assets/images/list-style.png"

const HomePage = () => {
    
    return (
        <div className="w-full">
            
            {/* HERO SECTION */}
            <section className={`bg-cover bg-center bg-no-repeat w-full h-[70vh] flex flex-col text-white/90 justify-center items-center p-6`}
            style={{ backgroundImage: `url(${HeroImage})`}}>
                <img src={Brand} alt="SMART Lab" />
                <p className="text-2xl my-16">Welcome</p>
                <p className="mt-8">
                The <strong>S</strong>ustainable <strong>M</strong>obility and <strong>A</strong>dvanced <strong>R</strong>esearch in <strong>T</strong>ransportation Group
                </p>
            </section>

            {/* PROFILE */}
            <section className="my-32 flex w-3/5 mx-auto gap-4">
                <div className="w-1/2 px-12">
                    <h1 className="text-medium text-lg mb-4">PI: Dr. Armstrong Aboah</h1>
                    <p className="text-justify text-sm leading-5 text-black/70 my-2">
                    Professor Armstrong is a resourceful Transportation Data Scientist and Assistant Professor 
                    at North Dakota State University. With a strong track record of successful research and extensive hands-on 
                    experience, he specializes in developing cutting-edge statistical modeling techniques, advanced computer 
                    vision systems, all designed to enhance transportation system management and operations. 
                    His work spans across various domains, where he has served as both architect and application 
                    developer, utilizing machine learning models to tackle large-scale, complex challenges.
                    </p>
                    <p className="text-justify text-sm leading-5 text-black/70">
                    He received his PhD from the University of Missouri-Columbia, under the mentorship of Yaw Adu-Gyamfi.
                    </p>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src={Armstrong} alt="Armstrong Aboah" width={"65%"} />
                </div>
            </section>

            {/* RESEARCH */}
            <section className="my-32 bg-[#efefef]/80 py-8 px-32">
                <h1 className="text-2xl font-medium my-6">Our Research</h1>
                <p className="w-4/5">
                At the SMART Lab, we leverage Big Data Analytics, Artificial Intelligence (AI), and 
                the Internet of Things (IoT) to design and deploy advanced transportation technologies. 
                Our research focuses on:
                </p>
                {/* <ul className="list-image-[url(src/assets/images/list-style.png)] p-8 space-y-1"> */}
                <ul className={`p-8 space-y-1`}
                style={{ listStyleImage: `url(${ListStyle1})`}}>
                    <li>Traffic Flow Optimization</li>
                    <li>IoT devices for infrastructure monitoring and traffic safety</li>
                    <li>Infrastructure capacity planning</li>
                    <li>Large-scale transportation dataset analysis</li>
                    <li>Machine learning for predictive modelling</li>
                </ul>
            </section>

            {/* NEWS */}
            <section className="my-32 w-full px-32">
                <h1 className="text-2xl font-medium my-6">News</h1>
                <NewsItem 
                    date="JUL 08, 2024" 
                    details={
                        <p>Congratulations! The SMART Lab received a seed grant from AI SUSTEIN</p>
                    } 
                />
                <NewsItem 
                    date="JUL 02, 2024" 
                    details={
                        <p>Congratulations! The SMART Lab was awarded an EDRF grant.</p>
                    } 
                />
                <NewsItem 
                    date="JUN 10, 2024" 
                    details={
                        <p>Excited to welcome two new Ph.D students (Blessing and Joshua) into my lab.</p>
                    } 
                />
            </section>

            {/* MEMORY */}
            <section className="my-32 w-3/5 mx-auto text-sm text-center flex flex-col">
                <img className="pt-8 pb-4" src={MemoryImage} alt="" />
                <i>A shot of the group at dinner and hangout party</i>
            </section>

            {/* FOOTER */}
            <Footer />

        </div>
    )
}

export default HomePage