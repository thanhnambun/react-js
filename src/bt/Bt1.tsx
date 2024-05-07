import React from 'react'

export default function bt1() {
    const clickme = () => {
            console.log("clicked");

        }
    return (
    <div> bt1
        <button onClick={clickme}> Click</button>
    </div >
  )
}
