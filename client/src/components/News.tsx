
interface newsitemprop {
    date: string,
    details: React.ReactNode
}

const NewsItem = ({date, details}: newsitemprop) => {
    return (
        <div className="my-1 flex space-x-6">
            <strong className="text-sm"> {date} </strong> 
            {details}
        </div>
    )
}

export default NewsItem