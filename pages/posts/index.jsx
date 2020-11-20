import React from 'react'
import Link from 'next/link'
import PostsListComponent from '../../components/PostsListComponent'
import NavbarComponent from '../../components/NavbarComponent'
import StyledComponents from '../../styled_components/StyledComponents'

export default function posts() {
    const { StyledWebb19Heading } = StyledComponents
    return (
        <>
            <NavbarComponent />
            <div className="container">
                <div className="mb-2">
                    <StyledWebb19Heading>
                        WEBB19
                    </StyledWebb19Heading>
                    <h1>Posts</h1>
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
