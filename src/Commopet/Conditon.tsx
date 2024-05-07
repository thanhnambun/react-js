import React, { useState } from 'react'
import Modal from "./Modal"

export default function Conditon() {
    const [active, setActive] = useState<boolean>(false);
    const handleClick = () => {
        setActive(true)
    }
    return (
        <div>Conditon
            {active ? <Modal></Modal> : ""} <br />
            <button onClick={handleClick}>click</button>
        </div>
    )
}
