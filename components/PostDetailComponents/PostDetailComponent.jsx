import React, { useEffect, useState } from 'react'
import ForumKit from '../../datakits/ForumKit'
import NavbarComponent from '../NavbarComponent'
import AuthorComponent from './AuthorComponent'

export default function PostDetailComponent(props) {
    const forumKit = new ForumKit()
    const [post, setPost] = useState(null)

    useEffect(async () => {
        setPost(await forumKit.getPostDetails(props.postId))
    }, [])

    return (
        <>
            <NavbarComponent />
            <div className="container">
                <div className="row">
                    <h1>Detail page</h1>
                </div>
                {post && (
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>Post details</h2>
                        </div>
                        <div className="col-lg-4">
                            <AuthorComponent
                                author={post.author}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
