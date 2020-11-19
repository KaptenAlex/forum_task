import React, { useContext } from 'react'
import PostDetailDataContext from '../../contexts/PostDetailDataContext'

export default function PostFilesComponent(props) {
    const postDetailContext = useContext(PostDetailDataContext)
    return (
        <div className="col-lg-6">
            <h2>Post files</h2>
            <ul>
                {props.files && props.files.map( (filesItem, index) => {
                    <li key={index}>{filesItem[0]}: {filesItem[1]}</li>
                })}
            </ul>
        </div>
    )
}
