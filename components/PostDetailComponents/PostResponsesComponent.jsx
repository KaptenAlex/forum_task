import React from 'react'

export default function PostResponsesComponent(props) {
    return (
        <div className="col-lg-12">
            <h1>Post responses</h1>
            {props.noOfResponses && (
                <h4>Number of responses on this post: {props.noOfResponses}</h4>
            )}
            {props.responses && props.responses.map((response, index) => {
                console.log(response);
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
