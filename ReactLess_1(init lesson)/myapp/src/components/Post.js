

function Post(props){

const {title, text, color} = props

  let styleObj = {
    color, 
    fontSize: '35px'
  }
  
    return(
      <div className="post">
        <h1 style={styleObj}>{title}</h1>
        <p>{text}</p>
      </div>
    )
  }
  

export default Post

