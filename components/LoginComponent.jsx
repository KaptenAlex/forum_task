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

    useEffect( () => {
        if(authKit.getLocalStorageToken()) {
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
        <div>
            <h1>Login page</h1>
            <div>
                <form method="POST" onSubmit={SignInUser}>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={updateLoginPayload}
                            value={loginPayload.email}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={updateLoginPayload}
                            value={loginPayload.password}
                        />
                    </div>

                    {!loginStatus && (
                        <div>
                            <p style={{backgroundColor: "red"}}>Unable to log in with provided credentials</p>
                        </div>
                    )}

                    <div>
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
