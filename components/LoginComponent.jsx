import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AuthKit from '../datakits/AuthKit'
import StyledComponents from '../styled_components/StyledComponents'

export default function LoginComponent() {
    const { StyledWebb19Heading } = StyledComponents
    const authKit = new AuthKit()
    const router = useRouter()

    const [loginStatus, SetLoginStatus] = useState(true)
    const [loginPayload, setLoginPayload] = useState({
        email: 'sehixa@mail.com',
        password: 'Testar123'
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
                    <StyledWebb19Heading>
                        WEBB19
                    </StyledWebb19Heading>
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
