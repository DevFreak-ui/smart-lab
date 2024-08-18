
interface newsitemprop {
    date: string,
    details: React.ReactNode,
    newsPage?: boolean
}

const NewsItem = ({date, details, newsPage}: newsitemprop) => {
    return (
        <div className="my-1 flex space-x-6 text-sm">
            <span className={`${!newsPage ? 'font-bold font-xs min-w-32' : 'min-w-16'} normal-case`}> {date} </span> 
            <span>{details}</span>
        </div>
    )
}

export default NewsItem