import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

//TODO: Get the token to serverside from client

// const ROOT_URL = 'https://lab.willandskill.eu'
// function fetchUserAccount() {
//     const url = `${ROOT_URL}/api/v1/me/`
//     const token = localStorage.getItem('token')

//     return fetch(url);
// }

export default function home() {
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <h1>Home page!!!</h1>
            <div>
                <h2>The WEBB19 Forum</h2>
                <strong>What is this forum?</strong>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                    Iste, error. Maxime unde eos, cumque id dignissimos magnam repellendus nam similique officiis saepe nobis, eius alias odio.<br></br>
                    Perferendis ad amet quaerat?
                </p>
            </div>
        </div>
    )
}

// export async function getServerSideProps() {
//     const fetchUser = await fetchUserAccount()
//     const data = await fetchUser.json()
//     console.log(data)
//     return {
//         props: {
//             userAccount: data
//         }
//     }
// }