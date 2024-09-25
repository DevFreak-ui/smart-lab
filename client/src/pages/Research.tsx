import ResearchBg from "../assets/images/research-bg.jpg"
import Footer from "../components/Footer"
import ResearchCloud from "../components/ResearchCloud"
import { useMediaQuery } from 'usehooks-ts';

// interface StudentActivityProps {
//     title: string;
//     description: React.ReactNode;
// }

const ResearchPage = () => {

    const isMobile = useMediaQuery('(max-width: 480px)');

    const researchInterests = [
        { name: "Transportation Planning", percentage: 15 },
        { name: "Intelligent Transportation Systems", percentage: 20 },
        { name: "Autonomous and Connected Vehicles", percentage: 15 },
        { name: "Big Data Analytics in Transportation", percentage: 10 },
        { name: "Travel Demand Modeling", percentage: 8 },
        { name: "Transportation Safety", percentage: 10 },
        { name: "Public Transportation", percentage: 5 },
        { name: "Congestion Management", percentage: 5 },
        { name: `${isMobile ? "Smart Cities" : "Digital Twins and Smart Cities"}`, percentage: 5 },
        { name: `${isMobile ? "Asset Management" : "Pavement and Asset Management"}`, percentage: 5 },
        { name: `${isMobile ? "Agri Tech" : "Agriculture Technology and AI"}`, percentage: 2 },
    ];

    // const studentOpportunities = [
    //     { title: "Graduate Research", description: "PhD and MS students lead their own research projects under faculty mentorship." },
    //     { title: "Undergraduate Research", description: "We offer research opportunities for motivated undergraduate students to gain hands-on experience." },
    //     { title: "Internships", description: `We currently do not have internship opportunities. Check back later.` },
    // ];

    return (
        <div className="text-black/80">

            {/* HERO */}
            <section className="max-h-[40vh] overflow-y-hidden relative">
                <img src={ResearchBg} alt="Illustration" width={'100%'} />
                <div className="w-full h-full absolute bg-black/50 flex items-center justify-center top-0">
                    <h1 className="text-[27px] font-black text-white/90">Research</h1>
                </div>
            </section>

            {/* RESEARCH OVERVIEW */}
            <section className="w-4/5 md:w-3/5 mx-auto my-8 sm:my-16">
                <h2 className="text-2xl font-bold mb-4">Our Research Focus</h2>
                <p className="mb-6">
                    We are interdisciplinary researchers leveraging cutting-edge technologies to enhance transportation. 
                    Our research spans across various domains of transportation engineering and data science, 
                    where we develop innovative solutions to tackle large-scale, complex challenges in urban 
                    mobility, transportation safety, and sustainable infrastructure.
                </p>
            </section>

            {/* RESEARCH CLOUD */}
            <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-16 overflow-x-auto md:overflow-x-hidden">
                <ResearchCloud interests={researchInterests} />
            </section>

            {/* STUDENT OPPORTUNITIES */}
            {/* <section className="my-12 md:my-32 p-4 w-4/5 md:w-3/5 tv:w-2/5 mx-auto bg-gray-100/50 rounded-lg">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-medium mb-8 text-center">Student Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studentOpportunities.map((opportunity, index) => (
                        <StudentActivity key={index} {...opportunity} />
                    ))}
                </div>
            </section> */}

            {/* FOOTER */}
            <Footer />

        </div>
    )
}

// const StudentActivity = ({ title, description }: StudentActivityProps) => (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//     </div>
// );

export default ResearchPage