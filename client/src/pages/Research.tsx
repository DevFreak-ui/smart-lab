import ResearchBg from "../assets/images/research-bg.jpg"
import ProjectItem from "../components/ProjectsItem"
import Proj1 from "../assets/images/project_thumbs/anomaly.jpg"
import Pavement from "../assets/images/project_thumbs/pavement.gif"
import Gaze from "../assets/images/project_thumbs/gaze.png"
import Footer from "../components/Footer"
import nsf from "../assets/images/nsf.png"
import sustein from "../assets/images/sustein.png"
import ec from "../assets/images/ec.png"

const ResearchPage = () => {

    const projects = [
        {
            img_src: Proj1,
            title: "A vision-based system for traffic anomaly detection using deep learning and decision trees",
            description: "Any intelligent traffic monitoring system must be able to detect anomalies such as traffic accidents in real-time. In this paper, we propose a Decision-Tree enabled approach powered by Deep Learning for extracting anomalies from traffic cameras while accurately estimating the start and end time of the anomalous event. Our approach included creating a detection model, followed by anomaly detection and analysis. YOLOv5 served as the foundation for our detection model. The anomaly detection and analysis step entail traffic scene background estimation, road mask extraction, and adaptive thresholding. Candidate anomalies were passed through a decision tree to detect and analyze final anomalies. The proposed approach yielded an F1 score of 0.8571, and an s4 score of 0.5686, per the experimental validation."
        },
        {
            img_src: Pavement,
            title: "A Multitask Learning Framework for Estimating Pavement Condition Indices Directly from Images",
            description: "This study introduces a unified multi-task model for directly predicting the Pavement Condition Index (PCI) from top-down pavement images. Unlike traditional methods that use separate models for distress type, extent, and severity, this approach integrates an encoder with four decoders for detection, segmentation, and PCI estimation. The model achieves real-time, accurate PCI predictions while effectively managing crack detection and segmentation, demonstrating strong performance on a benchmarked multitask pavement distress dataset."
        },
        {
            img_src: Gaze,
            title: "GazeGNN: A Gaze-Guided Graph Neural Network for Chest X-ray Classification",
            description: "Eye tracking is vital in computer vision, particularly for understanding how medical professionals analyze images. Traditional methods use visual attention maps (VAMs) from eye-gaze data, but this is time-consuming. The study introduces GazeGNN, a novel graph neural network that directly integrates raw eye-gaze data with image classification, bypassing VAMs. This real-time, end-to-end system improves disease classification accuracy and is the first to combine GNNs with eye-gaze data. Experiments on chest X-rays show GazeGNN outperforms existing methods."
        },
    ]


    return (
        <div className="text-black/80">

            {/* HERO */}
            <section className="w-full max-h-[50vh] overflow-y-hidden relative">
                <img src={ResearchBg} alt="Illustration" width={'100%'} />
                <div className="w-full h-full absolute bg-black/50 flex items-center justify-center top-0">
                    <h1 className="text-[27px] font-black text-white/90">Research</h1>
                </div>
            </section>


            {/* PROJECTS */}
            <section className="w-full p-4 xl:w-3/5 mx-auto my-16">
                {projects.map((item, index) => (
                    <ProjectItem
                        img_src={item.img_src}
                        title={item.title}
                        description={item.description}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </section>


            {/* SPONSORS */}
            <section className="w-full p-4 my-32 xl:w-1/2 mx-auto">
                <h1 className="pb-32 text-center">Our research has generously been supported by: </h1>
                <div className="flex flex-col xl:flex-row justify-center gap-8 xl:gap-16">
                    <img src={nsf} alt="" className="object-scale-down"/>
                    <img src={sustein} alt="" className="object-scale-down"/>
                    <img src={ec} alt="" className="object-scale-down"/>
                </div>
            </section>


            {/* FOOTER */}
            <Footer />

        </div>
    )
}


export default ResearchPage