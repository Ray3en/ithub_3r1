


export default function Pagination(props){

    const {count, setCurrentPage, currentPage} = props

    const checkAndGo = (type) => {
        if (type === 'next'){
            if (currentPage < count ){
                setCurrentPage(currentPage + 1)
            }
        } else {
            if (currentPage > 1 ){
                setCurrentPage(currentPage - 1)
            }  
        }
    }

    return (
        <ul className="pagination">
            <li onClick={() => checkAndGo('prev')}>{'<'}</li>
            {new Array(count).fill(null).map((_,ind) => ind + 1).map(el => 
                <li 
                    key={el}
                    onClick={() => setCurrentPage(el)}
                    className={(currentPage === el) ? "active" : ''}
                >
                    {el}
                </li>
            )}
            <li onClick={() => checkAndGo('next')}>{'>'}</li>
        </ul>
    )
}