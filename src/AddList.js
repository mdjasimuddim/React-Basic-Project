import React, { useState } from 'react'

export default function AddList({setList, setShowModal}) {

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const submitedList = {
            title,
            StartDate: date,
            id: Date.now()
        }
        
        setList(prevState => [...prevState, submitedList])
        setShowModal(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>which programming language do you love?</span>
                <input onChange={e => setTitle(e.target.value)} type="text" placeholder="your title" />
            </label>
            <label>
                <span>when you learn this thing?</span>
                <input  onChange={e => setDate(e.target.value)} type="date"/>
            </label>
            <button>Submit</button>
        </form>
    )
}