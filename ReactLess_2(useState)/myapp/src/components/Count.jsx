
function Count() {

  let count = 0

  function handleClick(){
    count++
    console.log(count)
  }

    return (
      <div>
        <p>{count}</p>
        <button onClick={handleClick}>Click</button>
      </div>
    );
  }

  
export default Count;
  