import React from 'react'

const ForumCreateThread = () => (
    <div>
        <form id="thread-form-create" action="/api/threads" method="POST">
            <label htmlFor="title">Title:</label>
            <input type="text" id="thread-title" name="title" required />
            <label htmlFor="body">Body:</label>
            <input type="text" id="thread-body" name="body" required />
            <label htmlFor="owner">Owner Id:</label>
            <input type="text" id="thread-owner" name="owner" required />
            <button>Create Thread</button>
        </form>
    </div>
)

export default ForumCreateThread