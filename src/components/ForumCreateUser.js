import React from 'react'

const ForumCreateUser = () => (
    <div>
        <form id="user-form-create" action="/api/users" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="user-name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="user-email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="user-password" name="password" required />
            <label htmlFor="age">Age:</label>
            <input type="number" id="user-age" name="age" />
            <button>Create User</button>
        </form>
    </div>
)

export default ForumCreateUser