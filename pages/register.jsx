import React, { useEffect } from 'react'
import Link from 'next/link'
import RegisterComponent from '../components/RegisterComponent'

const ROOT_URL = 'https://lab.willandskill.eu'

function fetchCountries() {
    const url = `${ROOT_URL}/api/v1/countries/`
    return fetch(url);
}

export default function register(props) {

    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/home')
        }
    }, [])

    return (
        <div>
            <RegisterComponent
                rootUrl={'https://lab.willandskill.eu'}
                countries={props.countries}
            />
            <div className="container mt-2">
                <div className="d-flex justify-content-center">
                    <div className="col-lg-4">
                        <Link href="/">
                            <a className="btn btn-primary btn-lg btn-block">Already have an account? Sign in</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const getCountries = await fetchCountries()
    const data = await getCountries.json()
    const countryList = data.results

    return {
        props: {
            countries: countryList
        }
    }
}