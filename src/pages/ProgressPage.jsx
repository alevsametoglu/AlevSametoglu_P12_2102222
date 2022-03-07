import React from 'react'
import './ProgressPage.scss'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Progress } from '../assets/images/Progress.svg'

/**@function for showing Progress pagge
 *
 * @returns  (<ProgressPage/>)
 */
const ProgressPage = () => {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate(-1)
    }, 1000)

    return (
        <div className="progress-page">
            <Progress />
            <div className="progress-text">Page bientôt disponible</div>
        </div>
    )
}
export default ProgressPage
