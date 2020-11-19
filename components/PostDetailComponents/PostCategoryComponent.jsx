import React from 'react'

export default function PostCategoryComponent(props) {
    return (
        <div className="col-lg-6">
            <h2>Post category</h2>
            {console.log(props.category)}
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
