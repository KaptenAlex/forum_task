import React, { useEffect, useState, useReducer } from 'react'
import ForumKit from '../../datakits/ForumKit'
import NavbarComponent from '../NavbarComponent'
import PostAuthorComponent from './PostAuthorComponent'
import PostCategoryComponent from './PostCategoryComponent'
import PostComponent from './PostComponent'
import PostFilesComponent from './PostFilesComponent'
import PostResponsesComponent from './PostResponsesComponent'
import PostDetailDataContext from '../../contexts/PostDetailDataContext'

export default function PostDetailComponent(props) {
    const forumKit = new ForumKit()
    const [post, setPost] = useState(null)
    const [postDetails, setPostDetails] = useState(null)

    useEffect(async () => {
        setPost(await forumKit.getPostDetails(props.postId))
    }, [])

    useEffect(() => {
        setPostDetails(filterPostData())
    }, [post])

    function filterPostData() {
        const allowedPostKeys = [
            'content',
            'country',
            'createdAt',
            'id',
            'isClosed',
            'isPinned',
            'parent',
            'title',
            'updatedAt',
            'userSubcriptionUpdated',
            'userSubscribed',
            'viewCount'
        ]
        if (post) {
            const postData = post;
            const filteredPostData = Object.keys(postData).filter(key => allowedPostKeys.includes(key))
                .reduce((obj, key) => {
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
                    <PostDetailDataContext.Provider
                    value={{
                        postDetails: postDetails,
                        postAuthor: post.author,
                        postCategory: post.category,
                        postFiles: post.files,
                        postResponses: post.responses,
                        postNoOfResponses: post.countResponses,
                        postId: post.id
                    }}>
                        <>
                            <div className="row mt-5">
                                {console.log(post)}
                                <div className="col-lg-8">
                                    <PostComponent />
                                </div>
                                <div className="col-lg-4">
                                    <PostAuthorComponent />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <PostCategoryComponent />
                                <PostFilesComponent />
                            </div>
                            <div className="row mt-3">
                                <PostResponsesComponent />
                            </div>
                        </>
                    </PostDetailDataContext.Provider>
                )}
            </div>
        </>
    )
}
