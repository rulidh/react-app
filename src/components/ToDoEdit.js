import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

function ToDoEdit() {
    const [title, setTitle]= useState("")
    const [jam, setJam]= useState("")
    const {id}= useParams()

    useEffect(()=> {
        getListById()
    }, [])

    const getListById= async()=> {
        const response= await fetch(`http://localhost:8080/todo/${id}`)
        const data= await response.json()

        setTitle(data.title)
        setJam(data.jam)
    }

    const editList= async(e)=> {
        e.preventDefault()
        const list= {title, jam}
        await fetch(`http://localhost:8080/todo/${id}`, {
            method: "PUT",
            body: JSON.stringify(list),
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    return(
        <div>
            <form onSubmit={editList}>
                <div>
                    <label>Title</label>
                    <div>
                        <input  onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder="What you want to do?"></input>
                    </div>
                </div>

                <div>
                    <label>Jam</label>
                    <div>
                        <input onChange={(e)=> setJam(e.target.value)} value={jam} type="text" placeholder="Jam berapa kamu ingin mengerjakan?"></input>
                    </div>
                </div>

                <div>
                    <div>
                        <button>Save</button>
                    </div>
                </div>
            </form>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default ToDoEdit