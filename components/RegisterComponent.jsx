import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function RegisterComponent(props) {
    const router = useRouter()
    const [registerStatus, setRegisterStatus] = useState(true)
    const [registerPayload, setRegisterPayload] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        country: ''
    })

    function updateRegisterPayload(e) {
        setRegisterPayload({
            ...registerPayload,
            [e.target.name]: e.target.value
        })
    }

    function handleBadRequest(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response
    }

    function registerAnAccount(e) {
        e.preventDefault();
        const url = `${props.rootUrl}/api/v1/auth/users/`
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerPayload)
        })
        .then(handleBadRequest)
        .then(res => res.json() )
        .then(data => {
            router.push('/')
        })
        .catch(err => {
            console.log(err);
            setRegisterStatus(false);
        })
    }

    return (
        <div>
            <div>
                <h1>Register a account</h1>
            </div>
            <div>
                <form method="POST" onSubmit={registerAnAccount}>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={updateRegisterPayload}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={updateRegisterPayload}
                        />
                    </div>
                    <div>
                        <label>First name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            onChange={updateRegisterPayload}
                        />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            onChange={updateRegisterPayload}
                        />
                    </div>
                    <div>
                        <label>Country</label>
                        <select
                            onChange={updateRegisterPayload}
                            name="country"
                        >
                            {props.countries && props.countries.map((country, index) => {
                                return (
                                    <option key={index} value={country.title}>{country.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <button type="submit">Create account</button>
                    </div>
                </form>
                {!registerStatus && (
                    <div>
                        <p style={{ backgroundColor: "red" }}>Unable to register with provided credentials</p>
                    </div>
                )}
            </div>
        </div>
    )
}
