import { useState } from "react"
import ResearchBg from "../assets/images/research-bg.jpg"
import NewsItem from "../components/News"
import { IoMdArrowDropright } from "react-icons/io"
import Footer from "../components/Footer"
import ContactUsBg from "../assets/images/contact-us.png"
import { IoLocationSharp } from "react-icons/io5"
import { FiPhoneCall } from "react-icons/fi"
import { useMediaQuery } from "usehooks-ts"

interface newsContainerProps {
    year: number,
    children: React.ReactNode,
    handleClick: ()=>void
}

interface NewsData {
    [year: number]: {
        [id: number]: [string, string];
    };
}

const NewsContainer = ({year, children, handleClick}: newsContainerProps) => {
    return (
        <main onClick={handleClick}>
            <div className="flex justify-between p-5 rounded-lg shadow-lg cursor-pointer my-4">
                <p> {year === 1000 ? "Older" : year } </p>
                <span className={`${year === 2024 && 'rotate-90'}`}>
                <IoMdArrowDropright size={23}/>
                </span>
            </div>

            {children}

        </main>
    )
}


const NewsPage = () => {

    const isDesktop = useMediaQuery('(min-width: 1920px)')

    const news: NewsData  = {
        2024: {
            1: ["JUL 08", "Congratulations! The SMART Lab received a seed grant from AI SUSTEIN"],
            2: ["JUL 02", "Congratulations! The SMART Lab was awarded an EDRF grant."],
            3: ["JUN 10", "Excited to welcome two new Ph.D students (Blessing and Joshua) into my lab."]
        },
        2023: {
            1: ["DEC 29", "Congratulations! Excited to be joining North Dakota State University as an Assistant Professor."],
            2: ["OCT 27", "Congratulations! Our Paper got accepted to 2023 NeurIPS workshop, Gaze Meet Machine Learning."],
            3: ["SEP 25", "Three of our papers got accepted to TRB 2024"],
            4: ["AUG 25", "Congratulations! Our Paper got accepted to IEOM International Conference in Detroit."],
            5: ["AUG 16", "Congratulations! Our paper on Classification of Human Driver Distraction was accepted to HFES 67th Intl. Annual Conference."],
            6: ["AUG 15", "Congratulations! Our paper on Gaze-Guided Graph Neural Network as accepted to 2024 IEEE/CVF WACV."],
            7: ["AUG 01", "Excited to be joining the University of Arizona as an Assistant Research Professor."],
            8: ["APR 17", "Two papers accepted for presentation at CVPR 2023."],
            9: ["JAN 01", "Join Northwestern University as a Postdoctoral Student under the Supervision of Dr. Ulas Bagci."],
        },
        2022: {
            1: ["DEC 17", "Graduated with a PhD from the University of Missouri-Columbi."],
            2: ["NOV 07", "Driver Maneuver Detection and Analysis using Time Series Segmentation and Classification was accepted for publication."],
            3: ["OCT 12", "Mobile Sensing for Multipurpose Applications in Transportation was accepted for publication."],
            4: ["JUN 20", "Oral presentation at CVPR: A Region-Based Deep Learning Approach to Automated Retail Checkout."],
        },
        1000: {
            1: ["Check back soon", ""],
        }
    }

    // Get years and sort in descending order
    const sortedYears = Object.keys(news)
        .map(yearStr => Number(yearStr))
        .sort((a, b) => b - a) 

    // State to manage visibility
    const [visibleYear, setVisibleYear] = useState<number | null>(sortedYears[0] || null)

    // Toggle function to show/hide news items
    const toggleVisibility = (year: number) => {
        setVisibleYear(visibleYear === year ? null : year)
    }

    return (
        <div className="text-black/80">

            {/* HERO */}
            <section className="w-full max-h-[40vh] overflow-y-hidden relative">
                <img src={ResearchBg} alt="Illustration" width={'100%'} />
                <div className="w-full h-full absolute bg-black/60 flex items-center justify-center top-0">
                    <h1 className="text-[27px] md:text-[40px] font-bold text-white/90">News</h1>
                </div>
            </section>


            {/* CONTENT */}
            <section className="my-12 md:my-28 w-4/5 md:w-3/5 tv:w-2/5 mx-auto">
                <p className="text-sm font-normal my-12 before:content-['*'] before:text-red-500">
                    <span>Sorted from </span>
                    <a href="#" className="text-blue-400 underline">recent</a>
                    <span> to </span>
                    <a href="#" className="text-blue-400 underline">older</a>
                </p>

                {sortedYears.map(year => (
                    <NewsContainer
                        key={year}
                        year={year}
                        handleClick={() => toggleVisibility(year)}
                    >
                        <div className={`${visibleYear === year ? 'py-6' : 'py-0'} px-5`}>
                            {visibleYear === year && (
                                Object.keys(news[year]).map(idStr => {
                                    const id = Number(idStr);
                                    const [date, details] = news[year][id];
                                    return (
                                        <NewsItem
                                            key={id}
                                            date={date}
                                            details={details}
                                            newsPage={true}
                                        />
                                    );
                                })
                            )}
                        </div>
                    </NewsContainer>
                ))}

            </section>


            {/* CONTACT US */}
            <section className="flex flex-col md:flex-row justify-center items-center mt-32 py-8 space-y-5 md:py-16 tv:py-28 md:pl-32 tv:pl-52 text-white/90 gap-5"
            style={{backgroundImage: `url(${ContactUsBg})`}}>
                <div className="md:pl-12 w-4/5 md:w-1/3 md:text-lg tv:text-[24px] space-y-10">
                    <div className="flex space-x-6">
                        <span className="my-2"><IoLocationSharp/></span>
                        <p>
                        1340 Administration Ave, Fargo, ND 58105, 
                        North Dakota State University,
                        United States.
                        </p>
                    </div>
                    <div className="flex space-x-6 items-center">
                        <span><FiPhoneCall/></span>
                        <p>+1819 265 54586</p>
                    </div>
                </div>
                <div className="rounded-lg md:rounded-none w-4/5 md:w-2/3 tv:w-full flex justify-center overflow-hidden md:px-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2730.9888544978194!2d-96.80365350263533!3d46.897594732504345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1723971186716!5m2!1sen!2sgh"
                        width={isDesktop ? '1200' : '600'}
                        height={isDesktop ? '600' : '300'}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="North Dakota State University Map"
                    ></iframe>
                </div>
            </section>


            {/* FOOTER */}
            <Footer/>

        </div>
    )
}


export default NewsPage