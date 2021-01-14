import React from 'react'

const ForumCreateReply = () => (
    <div>
        <form id="reply-form-create" action="/api/replys" method="POST">
            <label htmlFor="title">Title:</label>
            <input type="text" id="reply-title" name="title" required />
            <label htmlFor="body">Body:</label>
            <input type="text" id="reply-body" name="body" required />
            <label htmlFor="owner">Owner Id:</label>
            <input type="text" id="reply-owner" name="owner" required />
            <label htmlFor="ownerThread">Owner Thread Id:</label>
            <input type="text" id="reply-ownerThread" name="ownerThread" required />
            <button>Create Thread</button>
        </form>
    </div>
)

export default ForumCreateReply