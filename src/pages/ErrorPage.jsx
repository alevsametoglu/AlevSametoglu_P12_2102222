import React from 'react'
import './ErrorPage.scss'
import { Link, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate(-1)
    }, 1000)

    return (
        <div className="error-page">
            <div className="error-code">404</div>
            <div className="error-text">
                Oups! La page que vous demandez n'existe pas.
            </div>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
export default ErrorPage
