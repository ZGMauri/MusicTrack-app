import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
        <nav class='text-center'>
            <ul class='bg-orange-700 text-2xl'>
                <li class='text-center inline'>
                    <Link to="/">Home |</Link>
                </li>
                <li class='text-center inline'>
                    <Link to="/Profile">Profile |</Link>
                </li>
                <li class='text-center inline'>
                    <Link to="/Listenedalbum">Listened Album |</Link>
                </li>
                <li class='text-center inline'>
                    <Link to="/Listenedartist">Listened Artist |</Link>
                </li>
                <li class='text-center inline'>
                    <Link to="/Pendientartist">Pendient Artist |</Link>
                </li>
                <li class='text-center inline'>
                    <Link to="/Pendientalbum">Pendient Album</Link>
                </li>
            </ul>
        </nav>
  )
}
