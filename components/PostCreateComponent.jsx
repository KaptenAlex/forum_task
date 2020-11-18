import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ForumKit from '../datakits/ForumKit'

export default function PostCreateComponent() {
    const router = useRouter()
    const [categories, setCategories] = useState(null)
    const [postResponseStatus, setPostResponseStatus] = useState(true)
    const [postPayload, setPostPayload] = useState({
        title: '',
        content: '',
        category: ''
    })
    const forumKit = new ForumKit()

    useEffect(async () => {
        setCategories(await forumKit.getCategories())
    }, [])

    function updatePostPayload(e) {
        setPostPayload({
            ...postPayload,
            [e.target.name]: e.target.value
        })
    }

    async function createPost(e) {
        e.preventDefault()
        const status = await forumKit.createPost(postPayload);
        if (status) {
            router.push('/posts')
        } else {
            setPostResponseStatus(false)
        }
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="col-lg-8">
                    <h2>Create a post</h2>
                    <form onSubmit={createPost}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Title</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Title"
                                onChange={updatePostPayload}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Content</span>
                            </div>
                            <textarea
                                className="form-control"
                                name="content"
                                placeholder="Content"
                                onChange={updatePostPayload}>
                            </textarea>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Category</span>
                            </div>
                            <select
                                className="form-control"
                                name="category"
                                onChange={updatePostPayload}
                            >
                                {categories && categories.map((category, index) => {
                                    return (
                                        <option key={index} value={category.id}>{category.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {!postResponseStatus && (
                            <div className="alert alert-danger mt-2">
                                Unable to create post with provided data
                            </div>
                        )}
                        <div>
                            <button className="btn btn-success" type="submit">Submit post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
