
interface newsitemprop {
    date: string,
    details: React.ReactNode,
    newsPage?: boolean
}

const NewsItem = ({date, details, newsPage}: newsitemprop) => {
    return (
        <div className={`${!newsPage ? 'my-2 md:my-1' : 'my-1'} flex space-x-4 md:space-x-6 text-sm`}>
            <span className={`${!newsPage ? 'font-bold font-xs md:min-w-28' : 'min-w-16'} normal-case`}> {date} </span> 
            <span>{details}</span>
        </div>
    )
}

export default NewsItem