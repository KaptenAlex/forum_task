import React from 'react'
import Link from 'next/link'
export default function NavbarComponent(props) {
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
                <span className="navbar-text">
                    Signed in as: {props.signedInUser}
                </span>
            </nav>
        </>
    )
}
