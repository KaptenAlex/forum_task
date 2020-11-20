import AuthKit from "./AuthKit"

const ROOT_URL = 'https://lab.willandskill.eu'
const POSTS_URL = `${ROOT_URL}/api/v1/forum/posts/`
const POST_DETAIL_URL = `${ROOT_URL}/api/v1/forum/posts/`
const POSTS_CATEGORIES = `${ROOT_URL}/api/v1/forum/categories/`
const POST_CREATE = `${ROOT_URL}/api/v1/forum/posts/`
const POST_CREATE_REPLY = `${ROOT_URL}/api/v1/forum/posts/`

const authKit = new AuthKit()

export default class {

    async getPosts() {
        return await fetch(POSTS_URL, {
            headers: authKit.setPrivateHeaders()
        })
        .then(res => res.json() )
        .then(data => {
            return data.results
        })
    }

    async getPostDetails(id) {
        return await fetch(`${POST_DETAIL_URL}${id}/`, {
            headers: authKit.setPrivateHeaders()
        })
        .then(res => res.json() )
        .then(data => {
            return data
        })
    }

    async createResponseToPost(payload) {
        return await fetch(POST_CREATE_REPLY, {
            method: "POST",
            headers: authKit.setPrivateHeaders(),
            body: JSON.stringify(payload)
        })
        .then(authKit.handleBadRequest)
        .then( res => res.json() )
        .then(data => {
            return true;
        })
        .catch(err => {
            console.log(err);
            return false;
        })
    }

    async createPost(payload) {
        return await fetch(POST_CREATE, {
            method: "POST",
            headers: authKit.setPrivateHeaders(),
            body: JSON.stringify(payload)
        })
        .then(authKit.handleBadRequest)
        .then( res => res.json() )
        .then(data => {
            return true;
        })
        .catch(err => {
            console.log(err);
            return false;
        })
    }

    async getCategories() {
        return fetch(POSTS_CATEGORIES, {
            headers: authKit.setPrivateHeaders()
        })
        .then(res => res.json() )
        .then(data => {
            return data.results
        })
    }
}
