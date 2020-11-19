import React from 'react'

export default function PostComponent(props) {
    return (
        <>
            <h2>Post details</h2>
            <ul>
                {props.postDetail && Object.entries(props.postDetail).map((postObject, index) => {
                    if (!Array.isArray(postObject[1]) && typeof postObject[1] !== 'object') {
                        if (typeof postObject[1] === 'boolean') {
                            return (
                                <li key={index}>
                                    <h4>{postObject[0]}: {postObject[1].toString()}</h4>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index}>
                                    <h4>{postObject[0]}: {postObject[1]}</h4>
                                </li>
                            )
                        }
                    }
                })}
            </ul>
        </>
    )
}
