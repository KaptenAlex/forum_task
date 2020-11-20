import React, { useContext } from 'react'
import PostDetailDataContext from '../../contexts/PostDetailDataContext'
import PostAddResponseComponent from './PostAddResponseComponent'

export default function PostResponsesComponent() {
    const { postResponses, postNoOfResponses } = useContext(PostDetailDataContext)
    return (
        <div className="col-lg-12">
            <h1>Post responses</h1>
            <div className="row">
                <PostAddResponseComponent />
                {postNoOfResponses && (
                    <div className="col-lg-6">
                        <h2>Number of responses: {postNoOfResponses}</h2>
                    </div>
                )}
            </div>
            {postResponses && postResponses.map((response, index) => {
                return (
                    <div key={index} className="alert alert-dark">
                        <h3>{response.author.firstName} {response.author.lastName}</h3>
                        <h4 className="pl-3">{response.title}</h4>
                        <h5 className="pl-3">{response.content}</h5>
                    </div>
                )
            })}
        </div>
    )
}
