import React, { useState } from "react";
interface user {
    name: string;
    email: string;
}

export default function MyComponent() {

    const [user, setUser] = useState<user>({
        name: '',
        email: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        setUser({
            ...user,
            [e.target.name]: value
        })
    }

    const register = () => {
        console.log(user);

    }

  
    return (
        <>
            <label htmlFor="">Email</label> <br />
            <input name="email" type="text" onChange={handleChange} /><br />
            <label htmlFor="mail">user</label><br />
            <input name="name" type="text" onChange={handleChange} /><br />
            <button onClick={register}>Change</button>
        </>
    );
}
