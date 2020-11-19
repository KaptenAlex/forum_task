import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

export default function home() {
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-lg-6">
                    <h1 className="mb-0">WEBB19</h1>
                    <h1>Home page</h1>
                        <div>
                            <h1>What is this forum?</h1>
                            <h5>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Iste, error. Maxime unde eos, cumque id dignissimos magnam repellendus nam similique officiis saepe nobis, eius alias odio.
                                Perferendis ad amet quaerat?
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}