import React from 'react'
import axios from 'axios'

export default class ForumReplys extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            replys: []
        }
    }
    async componentDidMount() {
        try {
            const response = await axios.get(`/api/replys/thread/${this.props.match.params.id}`)

            this.setState(() => ({
                replys: response.data
            }))
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                {this.state.replys.length > 0 && this.state.replys.map((reply) => (<div key={reply._id}>
                    <div>
                        <h3>{reply.title}</h3>
                        <p>{reply.body}</p>
                    </div>
                </div>))}
            </div>
        )
    }
}