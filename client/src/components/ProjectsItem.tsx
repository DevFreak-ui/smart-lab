
interface itemProps {
    img_src: string,
    title: string,
    description?: React.ReactNode,
    reverse: boolean
}

const ProjectItem = ({img_src, title, description, reverse}: itemProps) => {

    return (
        <div className={`flex flex-col xl:flex-row gap-16 items-center my-24 ${reverse && 'xl:flex-row-reverse'}`}>
            <div className="w-1/2 border-8 border-[#0F27A3]/50 rounded-md">
                <img src={img_src} alt={title} className="object-fit -translate-y-4 -translate-x-4"/>
            </div>
            <div className="w-1/2 space-y-4">
                <h1 className="text-[18px] text-black font-bold"> {title} </h1>
                <p className="text-sm text-black/80 text-justify leading-6"> {description || ''}</p>
            </div>
        </div>
    )
}


export default ProjectItem