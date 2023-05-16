import { useState } from "react"
import { Link } from "react-router-dom" 

function ToDoAdd() {
    const [title, setTitle]= useState("")
    const [jam, setJam]= useState("")

    const saveData= async(e)=> {
        e.preventDefault()
        const list= {title, jam}
        await fetch("http://localhost:8080/todo", {
            method: "POST",
            body: JSON.stringify(list),
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    return (
        <div>
            <form onSubmit={saveData}>
                <div>
                    <label>Title</label>
                </div>
                <div>
                    <input  onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder="What you want to do?"></input>
                </div>

                <div>
                    <label>Jam</label>
                </div>
                <div>
                    <input onChange={(e)=> setJam(e.target.value)} value={jam} type="text" placeholder="Jam berapa kamu ingin mengerjakan?"></input>
                </div>

                <div>
                    <div>
                        <button>Save</button>
                    </div>
                </div>
            </form>
            <Link to={"/"}>Back to List</Link>
        </div>
    )
}

export default ToDoAdd