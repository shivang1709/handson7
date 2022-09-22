import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="list">
                    <li className="item">
                        <Link className="link" aria-current="page" to="/Home">HOME</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/Students">STUDENTS</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/Contectus">CONTACT US</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar