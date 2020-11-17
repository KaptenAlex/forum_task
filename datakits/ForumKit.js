import AuthKit from "./AuthKit"

const ROOT_URL = 'https://lab.willandskill.eu'
const POSTS_URL = `${ROOT_URL}/api/v1/forum/posts/`
const POST_DETAIL_URL = `${ROOT_URL}/api/v1/forum/posts/{id}/`

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

}
