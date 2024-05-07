import React from 'react'

export default function 
() {
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
    }
  return (
    <div>
         <label htmlFor="">Email</label> <br />
            <input name="email" type="text" onChange={changeEmail} /><br />
    </div>
  )
}
