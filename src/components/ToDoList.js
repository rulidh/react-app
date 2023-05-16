import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ToDoList() {
    const [list, setList]= useState([])
    
    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData= async()=> {
        const response= await fetch("http://localhost:8080/todo")
        const data= await response.json()

        setList(data)
    }

    const deleteList= async(id)=> {
        await fetch(`http://localhost:8080/todo/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        fetchData()
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>List</th>
                        <th>Jam</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((list, index)=> (
                        <tr key={list.id}>
                            <td>{index+ 1}</td>
                            <td>{list.title}</td>
                            <td>{list.jam}</td>
                            <td>
                                <Link to={`/edit/${list.id}`}>Edit</Link>
                                <button onClick={()=> {deleteList(list.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={"/add"}>Add List</Link>
        </div>
    )
}

export default ToDoList;