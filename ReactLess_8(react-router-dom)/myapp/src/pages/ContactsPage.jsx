import { useState } from "react"



function ContactsPage(){

    const [count, setCount] = useState(0)

    return (
        <div className="content" style={{flexDirection: 'column'}}>
            <h1>Contacts content</h1>
            <div>
                <h2>{count}</h2>
                <button onClick={() => setCount(count + 1)}>Click</button>
            </div>
        </div>
    )
}

export default ContactsPage