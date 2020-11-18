import React from 'react'
import Link from 'next/link'
import PostsListComponent from '../../components/PostsListComponent'
import NavbarComponent from '../../components/NavbarComponent'

export default function posts() {
    return (
        <>
            <NavbarComponent />
            <div className="container">
                <div className="row">
                    <h1>Posts page</h1>
                </div>
                <div className="row mb-2">
                    <Link href="/posts/create">
                        <button className="btn btn-success">Create post</button>
                    </Link>
                </div>
                <div className="row">
                    <PostsListComponent/>
                </div>
            </div>
        </>
    )
}
