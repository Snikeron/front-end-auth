import axios from './init'

// example
// import auth from './api/auth'
// auth.loginUser()

export default {
    fetchToken,
    fetchAccount
}

async function fetchToken(email, password) {
    // pretending to post the email, password
    // post gives back token if success
    const response = await axios.post('/auth/login', {
        email,
        password
    }) //fake token req
    const {token} = response.data
    return token
}

async function fetchAccount(token) {
    const response = await axios.get('/account', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const user = response.data
    return user
}

