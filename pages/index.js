import React from 'react'
import Link from 'next/link'
import LoginComponent from '../components/LoginComponent'

export default function Home() {
  return (
    <>
      <LoginComponent />
      <div className="container mt-3">
        <div className="d-flex justify-content-center">
          <div className="col-lg-4">
            <Link href="/register">
              <a className="btn btn-primary btn-lg btn-block">Register a account</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
