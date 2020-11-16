import React from 'react'
import Link from 'next/link'
import LoginComponent from '../components/LoginComponent'

export default function Home() {
  return (
    <>
    <LoginComponent />
    <Link href="/register">
        <a>Register a account</a>
    </Link>
    </>
  )
}
