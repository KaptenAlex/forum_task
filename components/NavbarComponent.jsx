import React, { useEffect, useState } from 'react'
import AuthKit from '../datakits/AuthKit'
import Link from 'next/link'

export default function NavbarComponent() {

    const authKit = new AuthKit();
    const [user, setUser] = useState(null)

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
                    <span className="navbar-text">
                        Signed in as: {user.firstName} {user.lastName}
                    </span>
                )}
            </nav>
        </>
    )
}
