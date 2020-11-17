import AuthKit from "./AuthKit"

const ROOT_URL = 'https://lab.willandskill.eu'
const POSTS_URL = `${ROOT_URL}/api/v1/forum/posts/`
const POST_DETAIL_URL = `${ROOT_URL}/api/v1/forum/posts/`

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
            console.log(data)
            return data
        })
    }

}
