import React from 'react'
import Link from 'next/link'
import PostsListComponent from '../../components/PostsListComponent'
import NavbarComponent from '../../components/NavbarComponent'

export default function posts() {
    return (
        <>
            <NavbarComponent />
            <div className="container">
                <div className="mb-2">
                    <h1>Posts page</h1>
                    <Link href="/posts/create">
                        <button className="btn btn-success">Create post</button>
                    </Link>
                </div>
                <div className="row">
                    <PostsListComponent />
                </div>
            </div>
        </>
    )
}
