import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import PostDetailComponent from '../../components/PostDetailComponents/PostDetailComponent'

export default function post(props) {
    const router = useRouter();
    
    useEffect( () => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])
    
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