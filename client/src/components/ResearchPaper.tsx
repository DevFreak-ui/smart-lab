import EmptyFile from "../assets/images/project_thumbs/empty_file.png"

interface paperItemProps {
    title: string,
    authors: string[],
    year: string,
    venue?: string,
    thumb_src?: string,
    projPageLink?: string,
    confJournalName?: string,
    confJournalLink?: string,
    arxivLink?: string,
    doiLink?: string,
    itemKey: number,
}

const Paper = ({
    title, 
    authors, 
    year, 
    venue, 
    thumb_src, 
    projPageLink, 
    confJournalName,
    confJournalLink,
    arxivLink,
    doiLink,
    itemKey,
}: paperItemProps) => {

    return (
        <div className="flex text-sm gap-6 my-2 md:my-0 sm:items-center">
            <span className="rounded-md w-1/5">
                <span className="sm:hidden"> [ {itemKey} ]</span>
                <img src={thumb_src || EmptyFile} alt="" className="object-scale-down w-48 h-32 hidden sm:block"/>
            </span>
            <div className="w-4/5 md:pt-6">
                <span>
                    {authors.map((author, index) => (
                        <span key={index} className={`mr-1 space-x-1 ${author.includes('*') ? 'font-medium underline' : ''}`}>
                            {author.replace('*', '')}
                            {index < authors.length - 1 && ','} 
                        </span>
                    ))}
                </span>
                <span> {`(${year}).`} </span>
                <span className="text-blue-500 font-bold capitalize"> {title} </span>
                <span className="italic"> {venue || ''} </span>

                <div className="flex mt-5 text-blue-500 font-light space-x-2">
                    {/* Project Page */}
                    {projPageLink && (
                        <a href={projPageLink}>[ Project page ]</a>
                    )}

                    {/* Conference/Journal */}
                    {confJournalName && (
                        <a href={confJournalLink}>[ {confJournalName} ]</a>
                    )}

                    {/* ArXiv */}
                    {arxivLink && (
                        <a href={arxivLink}>[ arXiv ]</a>
                    )}

                    {/* DOI */}
                    {doiLink && (
                        <a href={doiLink}>[ DOI ]</a>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Paper