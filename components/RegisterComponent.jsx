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
            .then(res => res.json())
            .then(data => {
                router.push('/')
            })
            .catch(err => {
                console.log(err);
                setRegisterStatus(false);
            })
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="col-lg-4">
                    <div>
                        <h1 className="mb-0">WEBB19 FORUM</h1>
                        <h1>Register a account</h1>
                        <div>
                            <form method="POST" onSubmit={registerAnAccount}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Email</span>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        onChange={updateRegisterPayload}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Password</span>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={updateRegisterPayload}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">First name</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        placeholder="First name"
                                        onChange={updateRegisterPayload}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Last name</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Last name"
                                        onChange={updateRegisterPayload}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Country</span>
                                    </div>
                                    <select
                                        onChange={updateRegisterPayload}
                                        name="country"
                                        className="form-control"
                                    >
                                        {props.countries && props.countries.map((country, index) => {
                                            return (
                                                <option key={index} value={country.id}>{country.title}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                {!registerStatus && (
                                    <div className="alert alert-danger">
                                        Unable to register with provided credentials
                                    </div>
                                )}
                                <div>
                                    <button className="btn btn-success btn-lg btn-block" type="submit">Create account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
