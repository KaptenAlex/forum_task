import React from 'react'
import styled from 'styled-components'
import StyledComponents from '../styled_components/StyledComponents'
import NavbarComponent from '../components/NavbarComponent'

const { StyledWebb19Heading } = StyledComponents

const StyledWebb19HeadingColoured = styled(StyledWebb19Heading)`
    color: black;
`

export default function home() {
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-lg-6">
                    <StyledWebb19Heading>
                        WEBB19
                    </StyledWebb19Heading>
                        <div>
                            <StyledWebb19HeadingColoured>
                                What is this forum?
                            </StyledWebb19HeadingColoured>
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