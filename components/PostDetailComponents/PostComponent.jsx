import React from 'react'

export default function PostComponent(props) {
    return (
        <>
            <h2>Post details</h2>
            <ul>
                {props.postDetail && Object.entries(props.postDetail).map((postDetail, index) => {
                    if (typeof postDetail[1] === 'object') {
                        return (
                            <li key={index}>{postDetail[0]}</li>
                        )
                    } else {                        
                        return (
                        <li key={index}>{postDetail[0]} {postDetail[1]}</li>
                        )
                    }
                })}
            </ul>
        </>
    )
}
