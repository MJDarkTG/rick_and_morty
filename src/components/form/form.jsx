import React from "react";
import { validation } from "./validation";
import s from "./Form.module.css"

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    });
    const [errors, SetErrors] = React.useState({
        username: "",
        password: ""
    })

    function handleInputCahnge(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
        SetErrors(validation({ ...userData, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)
    }
    return <div className={s.container}>
        <form  onSubmit={handleSubmit}>

            <label htmlFor="username"> Username:</label>
            <input
                id="username"
                name="username"
                placeholder="Ingrese el usuario..."
                type="text"
                value={userData.username}
                onChange={handleInputCahnge}
            />
            <p>{errors.username}</p>
            <label htmlFor="password"> Password:    </label>
            <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleInputCahnge}

            />
            <p>{errors.password}</p>
            <input type="submit" />

        </form>
    </div>
}