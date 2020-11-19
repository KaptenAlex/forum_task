import React, { useContext } from 'react'
import PostDetailDataContext from '../../contexts/PostDetailDataContext'

export default function PostCategoryComponent() {
    const { postCategory } = useContext(PostDetailDataContext)
    return (
        <div className="col-lg-8">
            <h2>Post category</h2>
            <ul>
                {postCategory && Object.entries(postCategory).map((categoryItems, index) => {
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
