
interface itemProps {
    img_src: string,
    title: string,
    description?: React.ReactNode,
    reverse: boolean
}

const ProjectItem = ({img_src, title, description, reverse}: itemProps) => {

    return (
        <div className={`flex flex-col lg:flex-row gap-8 md:gap-16 items-center my-12 md:my-24 ${reverse && 'lg:flex-row-reverse'}`}>
            <div className="w-full lg:w-1/2 border-8 border-[#0F27A3]/50 rounded-md tv:border-none">
                <img src={img_src} alt={title} className="w-full tv:h-72 object-contain tv:object-scale-down -translate-y-4 -translate-x-4"/>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
                <h1 className="text-sm md:text-[18px] text-black font-bold"> {title} </h1>
                <p className="text-xs md:text-sm text-black/80 text-justify leading-4 md:leading-6"> {description || ''}</p>
            </div>
        </div>
    )
}


export default ProjectItem