import React, { useState } from "react";
interface user {
    name: string;
    email: string;
}

export default function MyComponent() {
    // const [userName, setUserName] = useState<string>('');
    // const [email, setEmail] = useState<string>('');
    const [user, setUser] = useState<user>({
        name: '',
        email: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // let name = e.target.name
        let value = e.target.value
        setUser({
            ...user,
            [e.target.name]: value
        })
    }


    // const handleDelete = (userID: number) => {
    //     console.log(userID);
    // }

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    //     console.log(e.target.value);
    //     setUserName(e.target.value);
    // }

    const register = () => {
        console.log(user);

        // console.log(email);
    }

    // const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.target.value);
    //     setUserName(e.target.value);
    //     console.log(e.target.value);

    // }

    return (
        <>
            {/* <p onClick={() => handleDelete(5)}>Hi</p> <br />

            <button onClick={handleClick}>Click</button><br /> */}
            <label htmlFor="">Email</label> <br />
            <input name="email" type="text" onChange={handleChange} /><br />
            <label htmlFor="mail">user</label><br />
            <input name="name" type="text" onChange={handleChange} /><br />
            <button onClick={register}>Change</button>
        </>
    );
}
