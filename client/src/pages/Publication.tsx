import ResearchBg from "../assets/images/research-bg.jpg"
import Paper from "../components/ResearchPaper"
import Driver from "../assets/images/project_thumbs/driver.png"

const PublicationsPage = () => {

    const scholarPage = "https://scholar.google.com/citations?user=Ev1PAAwAAAAJ&hl=en&oi=ao"
    const papers = [
        {
            title: "Advancing Pavement Distress Detection in Developing Countries: A Novel Deep Learning Approach with Locally-Collected Datasets.",
            authors: ["Blessing Agyei Kyem", "Eugene Kofi Okrah Denteh", "Joshua Kofi Asamoah", "Kenneth Adomako Tutu", "Armstrong Aboah*"],
            year: "2024",
            venue: "arXiv preprint arXiv:2408.05649",
            arxivLink: "https://arxiv.org/pdf/2408.05649",
        },
        {
            title: "PaveCap: The First Multimodal Framework for Comprehensive Pavement Condition Assessment with Dense Captioning and PCI Estimation.",
            authors: ["Blessing Agyei Kyem", "Eugene Kofi Okrah Denteh", "Joshua Kofi Asamoah", "Armstrong Aboah*"],
            year: "2024",
            venue: "arXiv preprint arXiv:2408.04110",
            thumb_src: "",
            arxivLink: "https://arxiv.org/pdf/2408.04110",
        },
        {
            title: "Advancing Pavement Distress Detection in Developing Countries: A Novel Deep Learning Approach with Locally-Collected Datasets.",
            authors: ["Neema Jakisa Owor", "Yaw Adu-Gyamfi", "Armstrong Aboah*", "Mark Amo-Boateng"],
            year: "2024",
            venue: "Road Materials and Pavement Design",
            thumb_src: "",
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
            doiLink: "https://arxiv.org/pdf/2304.08261.pdf"
        }
    ]

    return (
        <div className="text-black/80">

            {/* HERO */}
            <section className="w-full max-h-[40vh] overflow-y-hidden relative">
                <img src={ResearchBg} alt="Illustration" width={'100%'} />
                <div className="w-full h-full absolute bg-black/50 flex items-center justify-center top-0">
                    <h1 className="text-[27px] font-black text-white/90">Publications</h1>
                </div>
            </section>


            {/* PUBLICATION LISTS */}
            <section className="w-4/5 md:w-2/3 tv:w-2/5 mx-auto my-12 md:my-28">
                <p className="mb-12">
                    Find most recent papers on
                    <a href={scholarPage} 
                        className="px-1 my-4 text-sm text-blue-500 after:content-['*'] after:text-black">
                        Google Scholar
                    </a>
                </p>

                {papers.map((paper, index) => (
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

                <p className="my-12 text-center text-sm">
                    Visit <a href={scholarPage} className="text-blue-500 mx-1">Google Scholar</a> to view all publications
                </p>
                
            </section>

        </div>
    )
}

export default PublicationsPage