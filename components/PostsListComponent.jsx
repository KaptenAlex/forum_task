import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ForumKit from "../datakits/ForumKit"

export default function PostsListComponent() {
    const forumKit = new ForumKit()
    const [posts, setPosts] = useState(null)

    useEffect(async () => {
        setPosts(await forumKit.getPosts())
    }, [])
    
    return (
        <>
            {posts && posts.map((post, index) => {
                return (
                    <div key={index} className="col-lg-12 mb-4">
                        <div className="card border-dark">
                            <div className="card-body bg-dark text-light">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.content}</p>
                                <Link href={`/posts/${post.id}`}>
                                    <a href="#" className="btn btn-primary">Go to detail page</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}