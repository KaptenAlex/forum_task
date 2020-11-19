import React, { useContext } from 'react'
import PostDetailDataContext from '../../contexts/PostDetailDataContext'

export default function PostCategoryComponent(props) {
    const postDetailContext = useContext(PostDetailDataContext)
    return (
        <div className="col-lg-6">
            <h2>Post category</h2>
            <ul>
                {props.category && Object.entries(props.category).map((categoryItems, index) => {
                    return (
                        <li key={index}>
                            <h4>{categoryItems[0]}: {categoryItems[1]}</h4>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
