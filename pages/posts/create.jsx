import React from 'react'
import PostCreateComponent from '../../components/PostCreateComponent'
import NavbarComponent from '../../components/NavbarComponent'

export default function create(props) {
    return (
        <>
            <NavbarComponent />
            <div>
                <p>{props.categories}</p>
                <PostCreateComponent />
            </div>
        </>
    )
}