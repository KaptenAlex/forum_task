import React, { useEffect, useState } from 'react'
import ForumKit from '../../datakits/ForumKit'
import NavbarComponent from '../NavbarComponent'
import AuthorComponent from './AuthorComponent'
import PostComponent from './PostComponent'

export default function PostDetailComponent(props) {
    const forumKit = new ForumKit()
    const [post, setPost] = useState(null)
    const [postDetails, setPostDetails] = useState(null)

    useEffect(async () => {
        setPost(await forumKit.getPostDetails(props.postId))
    }, [])

    useEffect( () => {
        setPostDetails(filterPostData())
    }, [post])

    function filterPostData() {
        const allowedPostKeys = [
            'author',
            'category',
            'content',
            'countResponses',
            'country',
            'createdAt',
            'files',
            'id',
            'isClosed',
            'isPinned',
            'parent',
            'responses',
            'title',
            'updatedAt',
            'userSubcriptionUpdated',
            'userSubscribed',
            'viewCount'
        ]
        if(post) {
            const postData = post;
            const filteredPostData = Object.keys(postData).filter(key => allowedPostKeys.includes(key))
            .reduce( (obj, key) => {
                obj[key] = postData[key]
                return obj
            }, {})

            return filteredPostData
        }
    }

    return (
        <>
            <NavbarComponent />
            <div className="container">
                {post && (
                    <div className="row mt-5">
                        <div className="col-lg-8">
                            <PostComponent
                            post={postDetails}
                            />
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
