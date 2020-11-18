import React from 'react'

export default function PostComponent(props) {
    console.log(props.post);
    return (
        <>
            <h2>Post details</h2>
            <ul>
                {props.post && Object.entries(props.post).map( (postDetail, index) => {

                    if (typeof postDetail[1] === 'object') {
                        console.log("object");
                        console.log(postDetail[1]);
                        Object.entries(props.post).map( (objectDetail, objectIndex) => {
                            return (
                                <li key={objectIndex}>{objectDetail[0]}: {objectDetail[1]}</li>
                            )
                        })

                    } else if (typeof postDetail[1] === 'array') {
                        console.log("array");
                        (props.post).map( (objectDetail, objectIndex) => {
                            return (
                                <li key={objectIndex}>{objectDetail[0]}: {objectDetail[1]}</li>
                            )
                        })
                        
                    } //else if(postDetail[1] === 'null') {
                    //     return (
                    //     <li key={objectIndex}>{objectDetail[0]}: {postDetail[1]}</li>
                    //     )

                    // } else {

                    //     return (
                    //         <li key={index}>{postDetail[0]}: {postDetail[1]}</li>
                    //     )
                    // }
                })}
            </ul>
        </>
    )
}
