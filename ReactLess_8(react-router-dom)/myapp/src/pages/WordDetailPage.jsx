import { useParams } from "react-router-dom"
import wordData from '../data/work_data.json'

function WorkDetailPage(){

    const {id} = useParams()

    const workDetail = wordData.find(elem => elem.id === +id)
    console.log(workDetail)

    return (
        <div className="content">
            <h1>{workDetail.full_title}</h1>
            <div>
                <p>{workDetail.tags.join(', ')}</p>
            </div>
            {workDetail.content.map(([tag, content]) => {
                if (tag === 'h1') return <h1>{content}</h1>
                if (tag === 'h2') return <h2>{content}</h2>
                if (tag === 'text') return <p>{content}</p>
                if (tag === 'img') return <img width={500} src={content}/>
            })}
        </div>
    )
}

export default WorkDetailPage