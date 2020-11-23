import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import PostCreateComponent from '../../components/PostCreateComponent'
import NavbarComponent from '../../components/NavbarComponent'

export default function create(props) {
    const router = useRouter();
    
    useEffect( () => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])
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