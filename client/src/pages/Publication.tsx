import { useState, useEffect } from 'react'
import ResearchBg from "../assets/images/research-bg.jpg"
import Paper from "../components/ResearchPaper"
import Driver from "../assets/images/project_thumbs/driver.png"

const PublicationsPage = () => {
    const [selectedInterest, setSelectedInterest] = useState<string | null>("All")

    const scholarPage = "https://scholar.google.com/citations?hl=en&user=Ev1PAAwAAAAJ&view_op=list_works&sortby=pubdate"
    const researchInterests = [
        "All",
        "Transportation Planning",
        "Intelligent Transportation Systems",
        "Autonomous and Connected Vehicles",
        "Big Data Analytics in Transportation",
        "Travel Demand Modeling",
        "Transportation Safety",
        "Public Transportation",
        "Congestion Management",
        "Digital Twins and Smart Cities",
        "Pavement and Asset Management",
        "Agriculture Technology"
    ];
    const papers = [
        {
            title: "Advancing Pavement Distress Detection in Developing Countries: A Novel Deep Learning Approach with Locally-Collected Datasets.",
            authors: ["Blessing Agyei Kyem", "Eugene Kofi Okrah Denteh", "Joshua Kofi Asamoah", "Kenneth Adomako Tutu", "Armstrong Aboah*"],
            year: "2024",
            venue: "arXiv preprint arXiv:2408.05649",
            arxivLink: "https://arxiv.org/pdf/2408.05649",
            interests: ["Pavement and Asset Management", "Big Data Analytics in Transportation"]
        },
        {
            title: "PaveCap: The First Multimodal Framework for Comprehensive Pavement Condition Assessment with Dense Captioning and PCI Estimation.",
            authors: ["Blessing Agyei Kyem", "Eugene Kofi Okrah Denteh", "Joshua Kofi Asamoah", "Armstrong Aboah*"],
            year: "2024",
            venue: "arXiv preprint arXiv:2408.04110",
            thumb_src: "",
            arxivLink: "https://arxiv.org/pdf/2408.04110",
            interests: ["Computer Vision", "Deep Learning"]
        },
        {
            title: "Advancing Pavement Distress Detection in Developing Countries: A Novel Deep Learning Approach with Locally-Collected Datasets.",
            authors: ["Neema Jakisa Owor", "Yaw Adu-Gyamfi", "Armstrong Aboah*", "Mark Amo-Boateng"],
            year: "2024",
            venue: "Road Materials and Pavement Design",
            thumb_src: "",
            interests: ["Pavement Engineering", "Transportation Engineering"]
        },
        {
            title: "DeepSegmenter: Temporal Action Localization for Detecting Anomalies in Untrimmed Naturalistic Driving Videos.",
            authors: ["Armstrong Aboah*", "Ulas Bagci", "Abdul Rashid Mussah", "Neema Jakisa Owor", "Yaw Adu-Gyamfi"],
            year: "2024",
            venue: "arXiv: 2304.08261.",
            thumb_src: Driver,
            projPageLink: "",
            confJournalName: "IEEE/CVF",
            confJournalLink: "https://openaccess.thecvf.com/content/CVPR2023W/AICity/papers/Aboah_DeepSegmenter_Temporal_Action_Localization_for_Detecting_Anomalies_in_Untrimmed_Naturalistic_CVPRW_2023_paper.pdf",
            doiLink: "https://arxiv.org/pdf/2304.08261.pdf",
            interests: ["Computer Vision", "Deep Learning"]
        }
    ]

    const filteredPapers = selectedInterest === "All"
        ? papers
        : papers.filter(paper => paper.interests.includes(selectedInterest as string))

    useEffect(() => {
        const interest = new URLSearchParams(window.location.search).get('interest');
        if (interest) {
            setSelectedInterest(interest);
        }
    }, []);

    return (
        <div className="text-black/80">

            {/* HERO */}
            <section className="w-full max-h-[40vh] overflow-y-hidden relative">
                <img src={ResearchBg} alt="Illustration" width={'100%'} />
                <div className="w-full h-full absolute bg-black/50 flex items-center justify-center top-0">
                    <h1 className="text-[27px] font-black text-white/90">Publications</h1>
                </div>
            </section>


            {/* RESEARCH INTERESTS */}
            <section className="w-4/5 md:w-2/3 tv:w-2/5 mx-auto mt-12">
                <p className="mb-4">Use the following options to filter papers by research interest:</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {researchInterests.map((interest, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedInterest(interest)}
                            className={`px-3 py-1 rounded-full text-sm ${
                                interest === selectedInterest
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {interest}
                        </button>
                    ))}
                </div>
            </section>

            {/* PUBLICATION LISTS */}
            <section className="w-4/5 md:w-2/3 tv:w-2/5 mx-auto mb-12 md:mb-28">
                <p className="mb-12 text-sm">
                    Find most recent papers on
                    <a href={scholarPage}
                        target="_blank"
                        className="px-1 my-4 text-sm text-blue-500 after:content-['*'] after:text-red-500">
                        Google Scholar
                    </a>
                </p>

                {filteredPapers.map((paper, index) => (
                    <Paper
                        key={index}
                        itemKey={index + 1}
                        title={paper.title}
                        authors={paper.authors}
                        year={paper.year}
                        venue={paper.venue}
                        thumb_src={paper.thumb_src}
                        projPageLink={paper.projPageLink}
                        confJournalName={paper.confJournalName}
                        confJournalLink={paper.confJournalLink}
                        arxivLink={paper.arxivLink}
                        doiLink={paper.doiLink}
                    />
                ))}

                {filteredPapers.length === 0 && (
                    <p className="text-center text-gray-500 my-8">No papers found for <span className="font-bold">"{selectedInterest}"</span>.</p>
                )}

                <p className="my-12 text-center text-sm">
                    Visit <a href={scholarPage} className="text-blue-500 mx-1">Google Scholar</a> to view all publications
                </p>
            </section>

        </div>
    )
}

export default PublicationsPage