import React from 'react'
import { NavLink } from 'react-router-dom'

const ForumHeader = () => (
    <header>
        <h1>Forum</h1>
        <NavLink to='/' activeClassName='es-activo' exact={true}>Inicio/Threads</NavLink>
        <NavLink to='/replys' activeClassName='es-activo'>Replys</NavLink>
        <NavLink to='/createuser' activeClassName='es-activo'>Crear User</NavLink>
        <NavLink to='/createthread' activeClassName='es-activo'>Crear Thread</NavLink>
        <NavLink to='/createreply' activeClassName='es-activo'>Crear Reply</NavLink>
    </header>
)

export default ForumHeader