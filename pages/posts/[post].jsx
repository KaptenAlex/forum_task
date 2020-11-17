import React from 'react'
import PostDetailComponent from '../../components/PostDetailComponents/PostDetailComponent'

export default function post(props) {
    return (
        <div>
            <PostDetailComponent
                postId={props.postId}
            />
        </div>
    )
}

export function getServerSideProps(ctx) {
    const id = ctx.query.post;
    return {
        props: {
            postId: id
        }
    }
}