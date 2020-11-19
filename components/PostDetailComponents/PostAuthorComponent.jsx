import React, { useContext } from 'react'
import PostDetailDataContext from '../../contexts/PostDetailDataContext'

export default function PostAuthorComponent() {
    const { postAuthor } = useContext(PostDetailDataContext)
    return (
        <>
            <h2>Author details</h2>
            {postAuthor && Object.entries(postAuthor).map((item, index) => {
                const capitalizedFirstChar = item[0].charAt(0).toUpperCase() + item[0].slice(1)
                item[0] = capitalizedFirstChar.replace(/([a-z])([A-Z])/g, '$1 $2')

                if (item[1] === null) {
                    item[1] = "Not available"
                }
                return (
                    <h4 key={index}>{item[0]}: <span>{item[1]}</span></h4>
                )
            })}
        </>
    )
}
