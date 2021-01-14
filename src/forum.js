import './polyfill.min.js'
import React from 'react'
import ReactDOM from 'react-dom'
import ForumRouter from './routers/ForumRouter'
import 'normalize.css/normalize.css'
import './sass/style.scss'

ReactDOM.render(<ForumRouter />, document.querySelector('#forumRoot'))