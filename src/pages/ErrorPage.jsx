import React from 'react'
import './ErrorPage.scss'
import { Link } from 'react-router-dom'

/**@function showing error page
 *
 * @returns (<ErrorPage/>)
 */

const ErrorPage = () => {
    return (
        <div className="error-page">
            <div className="error-code">404</div>
            <div className="error-text">
                Oups! La page que vous demandez n'existe pas.
            </div>
            <Link to="/">Retourner sur la page d'users</Link>
        </div>
    )
}
export default ErrorPage
