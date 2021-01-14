import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ForumHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            threads: []
        }
    }
    async componentDidMount() {
        const response = await axios.get('/api/threads')
        console.log('componentDidMount response.data', response.data)
        this.setState(() => ({
            threads: response.data
        }))
    }
    render() {
        return (
            <div>
                {this.state.threads.length > 0 && this.state.threads.map((thread) => (<div key={thread._id}>
                    <Link to={`/replys/${thread._id}`}>
                        <div>
                            <h3>{thread.title}</h3>
                            <p>{thread.body}</p>
                            <p>owner: {thread.owner}</p>
                        </div>
                    </Link>
                </div>))}
            </div>
        )
    }
}

// export default ForumHome
