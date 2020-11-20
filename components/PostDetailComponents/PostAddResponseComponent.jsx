import React, { useState, useContext } from 'react'
import PostDetailDataContext from '../../contexts/PostDetailDataContext'
import ForumKit from '../../datakits/ForumKit'

export default function PostAddResponseComponent() {
    const forumKit = new ForumKit()
    const { postId } = useContext(PostDetailDataContext)
    const [responsePayload, setResponsePayload] = useState({
        title: '',
        content: '',
        parent: postId
    })

    function updateResponsePayload(e) {
        setResponsePayload({
            ...responsePayload,
            [e.target.name]: e.target.value
        })
    }

    async function addResponseToPost(e) {
        e.preventDefault()
        await forumKit.createResponseToPost(responsePayload)
        setResponsePayload({
            title: '',
            content: '',
            parent: postId
        })
    }

    return (
        <div className="col-lg-6 mb-4">
            <form onSubmit={addResponseToPost}>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Add title</span>
                    </div>
                    <input type="text"
                        className="form-control"
                        name="title"
                        placeholder="My new response!"
                        value={responsePayload.title}
                        onChange={e => updateResponsePayload(e)}
                    />
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Add response</span>
                    </div>
                    <input type="text"
                        className="form-control"
                        name="content"
                        placeholder="Look at my response!"
                        value={responsePayload.content}
                        onChange={e => updateResponsePayload(e)}
                    />
                </div>
                <div>
                    <button className="btn btn-success" type="submit">Send response</button>
                </div>
            </form>
        </div>
    )
}
