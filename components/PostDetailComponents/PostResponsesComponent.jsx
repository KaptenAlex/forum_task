import React, { useContext } from 'react'
import PostDetailDataContext from '../../contexts/PostDetailDataContext'

export default function PostResponsesComponent() {
    const { postResponses, postNoOfResponses } = useContext(PostDetailDataContext)
    return (
        <div className="col-lg-12">
            <h1>Post responses</h1>
            {postNoOfResponses && (
                <h4>Number of responses on this post: {postNoOfResponses}</h4>
            )}
            {postResponses && postResponses.map((response, index) => {
                return (
                    <div key={index} className="alert alert-dark">
                        <h3>{response.author.firstName} {response.author.lastName}</h3>
                        <h5 className="pl-3">{response.content}</h5>
                    </div>
                )
            })}
        </div>
    )
}
