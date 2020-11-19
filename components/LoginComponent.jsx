import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AuthKit from '../datakits/AuthKit'

export default function LoginComponent() {
    const authKit = new AuthKit()
    const router = useRouter()

    const [loginStatus, SetLoginStatus] = useState(true)
    const [loginPayload, setLoginPayload] = useState({
        email: 'pelle@willandskill.se',
        password: 'pellesvanslos'
    })

    useEffect(() => {
        if (authKit.getLocalStorageToken()) {
            router.push('/home')
        }
    }, [])

    function updateLoginPayload(e) {
        setLoginPayload({
            ...loginPayload,
            [e.target.name]: e.target.value
        })
    }

    async function SignInUser(e) {
        e.preventDefault()
        const verifiedUser = await authKit.verifyUser(loginPayload)

        if (verifiedUser) {
            router.push('/home')
        } else {
            SetLoginStatus(false)
        }
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="col-lg-4">
                    <h1 className="mb-0">WEBB19 FORUM</h1>
                    <h1>Login page</h1>
                    <form method="POST" onSubmit={SignInUser}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Email</span>
                            </div>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                onChange={updateLoginPayload}
                                value={loginPayload.email}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Password</span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                onChange={updateLoginPayload}
                                value={loginPayload.password}
                            />
                        </div>

                        {!loginStatus && (
                            <div className="alert alert-danger">
                                Unable to log in with provided credentials
                            </div>
                        )}

                        <div>
                            <button className="btn btn-success btn-lg btn-block" type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
