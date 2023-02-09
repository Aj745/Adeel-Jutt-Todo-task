
import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Tittle or Description cannot be blank")

        }
        else {
            addTodo(title, description);
            settitle("");
            setdescription("");
        }
    }

    return (
        <div className="Comtainer my-3 text-center" >
            <h3><b><u>ADD A TODO</u></b></h3>
            <form onSubmit={submit}>
                <div className="mb-3 ">
                    <label htmlFor="title " className="form-label "><b>Todo Tittle</b></label>
                    <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="form-control" id="title " />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="title " className="form-label "><b>Todo Description</b></label>
                    <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} className="form-control" id="description " />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
