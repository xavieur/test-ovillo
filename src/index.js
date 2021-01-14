import './polyfill.min.js'
import axios from 'axios'

const loginForm = document.querySelector('#user-form-login')
const logoutForm = document.querySelector('#user-form-logout')
const logoutAllForm = document.querySelector('#user-form-logout-all')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('/api/users/login', {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        })

        const AUTH_TOKEN = response.data.token
        localStorage.setItem('auth-token', AUTH_TOKEN)
        getAuthToken()
    } catch (error) {
        console.log(error)
    }
})

logoutForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('/api/users/logout')
        localStorage.setItem('auth-token', '')
        getAuthToken()
    } catch (error) {
        console.log(error)
    }
})

logoutAllForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('/api/users/logoutAll')
        localStorage.setItem('auth-token', '')
        getAuthToken()
    } catch (error) {
        console.log(error)
    }
})

const getAuthToken = () => {
    const AUTH_TOKEN = localStorage.getItem('auth-token')
    console.log('auth token from user-login.ejs', AUTH_TOKEN)
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
}

getAuthToken()
  /* axios.interceptors.response.use(function (response) {
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

  console.log('interceptor response', response)

  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
}); */