


function Post(){

  let styleObj = {
    color: (false) ? 'red' : 'blue', 
    fontSize: '35px'
  }
    return(
      <div className="post">
        <h1 style={styleObj}>Post</h1>
        <p>Text</p>
      </div>
    )
  }
  

export default Post

