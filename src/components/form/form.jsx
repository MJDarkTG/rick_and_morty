import React from "react";

export default function Form() {
    return <div>
        <form>
            <label htmlFor="username"> Username:</label>
            <input
                id="username"
                name="username"
                placeholder="Ingrese el usuario..."
                type="text"

            />
            <label htmlFor="password"> Password:    </label>
            <input
                type="text"
                id="password"
                name="password"
            />
            <input type="submit" />
        </form>
    </div>
}