import React, { useContext } from 'react'
import PostDetailDataContext from '../../contexts/PostDetailDataContext'

export default function PostFilesComponent() {
    const { postFiles } = useContext(PostDetailDataContext)
    return (
        <div className="col-lg-4">
            <h2>Post files</h2>
            <ul>
                {postFiles && postFiles.map( (filesItem, index) => {
                    <li key={index}>{filesItem[0]}: {filesItem[1]}</li>
                })}
            </ul>
        </div>
    )
}
