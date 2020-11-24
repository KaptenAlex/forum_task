import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AuthKit from '../datakits/AuthKit'
import Link from 'next/link'

export default function NavbarComponent() {
    const router = useRouter()
    const authKit = new AuthKit()
    const [user, setUser] = useState(null)

    function signOutUser() {
        authKit.signOutUser()
        router.push('/')
    }

    useEffect(async () => {
        setUser(await authKit.fetchUserAccount())
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link href="/home">
                    <a className="navbar-brand">WEBB19</a>
                </Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/home">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/posts">
                            <a className="nav-link">Posts</a>
                        </Link>
                    </li>
                </ul>
                {user && ( 
                    <>
                    <span className="navbar-text">
                        Signed in as: {user.firstName} {user.lastName}
                    </span>
                    <div className="nav-item">
                        <button onClick={signOutUser} className="ml-2 btn btn-secondary">
                            Sign out
                        </button>
                    </div>
                    </>
                )}
            </nav>
        </>
    )
}
