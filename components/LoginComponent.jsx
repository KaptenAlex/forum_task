import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginComponent() {
    const ROOT_URL = 'https://lab.willandskill.eu'
    const router = useRouter()
    const [loginStatus, SetLoginStatus] = useState(true)
    const [loginPayload, setLoginPayload] = useState({
        email: 'pelle@willandskill.se',
        password: 'pellesvanslos'
    })

    useEffect( () => {
        if(localStorage.getItem('token')) {
            router.push('/home')
        }
    }, [])

    function updateLoginPayload(e) {
        setLoginPayload({
            ...loginPayload,
            [e.target.name]: e.target.value
        })
    }

    function handleBadRequest(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response
    }

    function SignInUser(e) {
        e.preventDefault()

        const url = `${ROOT_URL}/api/v1/auth/api-token-auth/`
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginPayload)

        })
            .then(handleBadRequest)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                console.log("success")
                router.push('/home')
            })
            .catch(err => {
                console.log(err)
                SetLoginStatus(false)
            })
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
