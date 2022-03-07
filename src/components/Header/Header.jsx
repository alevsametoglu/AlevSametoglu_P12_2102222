import React from 'react'
import './Header.scss'
import logo from './SportSeeLogo.svg'
import { Link } from 'react-router-dom'

/**@function Component header
 *@component
 *
 * @returns (<Header/>)
 */

const Header = () => {
    return (
        <div className="nav-bar">
            <div>
                <img src={logo} alt="" />
            </div>
            <Link className="nav-link" to="/">
                Acceuil
            </Link>
            <Link className="nav-link" to="/profil">
                Profil
            </Link>
            <Link className="nav-link" to="/reglage">
                Réglage
            </Link>
            <Link className="nav-link" to="/communite">
                Communité
            </Link>
        </div>
    )
}

export default Header
