const ROOT_URL = 'https://lab.willandskill.eu'
const signInUrl = `${ROOT_URL}/api/v1/auth/api-token-auth/`

export default class {
    setLocalStorageToken(token) {
        localStorage.setItem('token', token)
    }
    getLocalStorageToken() {
        return localStorage.getItem('token')
    }
    setPrivateHeaders() {
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.getLocalStorageToken()}`
        }
    }
    setPublicHeaders() {
        return {
            "Content-Type": "application/json"
        }
    }
    handleBadRequest(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response
    }
    async verifyUser(payload) {
        return await fetch(signInUrl, {
            method: "POST",
            headers: this.setPublicHeaders(),
            body: JSON.stringify(payload)
        })
            .then(this.handleBadRequest)
            .then(res => res.json())
            .then(data => {
                this.setLocalStorageToken(data.token)
                return true;
            })
            .catch(err => {
                console.log(err)
                return false;
            })
    }
    async fetchUserAccount() {
        const url = `${ROOT_URL}/api/v1/me/`
        return fetch(url, {
            headers: this.setPrivateHeaders()
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
    }
}
