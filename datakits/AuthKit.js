const ROOT_URL = 'https://lab.willandskill.eu'

export default class {
    getLocalStorageToken() {
        return localStorage.getItem('token')
    }
    
    async fetchUserAccount() {
        const url = `${ROOT_URL}/api/v1/me/`
        return fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.getLocalStorageToken()}`
            }
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
    }
}
