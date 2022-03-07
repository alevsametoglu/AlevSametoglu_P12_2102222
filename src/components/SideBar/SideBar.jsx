import React from 'react'
import './SideBar.scss'
import { ReactComponent as YogaIcon } from '../../assets/images/YogaIcon.svg'
import { ReactComponent as SwimIcon } from '../../assets/images/SwimIcon.svg'
import { ReactComponent as BodyBuildIcon } from '../../assets/images/BodyBuildIcon.svg'
import { ReactComponent as BycIcon } from '../../assets/images/BycIcon.svg'
import { Link } from 'react-router-dom'
/** @function for showing side bar
 * @component sidebar
 * @returns ( <SideBar/>)
 */

const SideBar = () => {
    return (
        <aside className="side-bar">
            <nav>
                <Link to="/yoga">
                    <YogaIcon className="icons" />
                </Link>
                <Link to="/swimming">
                    <SwimIcon className="icons" />
                </Link>
                <Link to="/bodyBuilding">
                    <BodyBuildIcon className="icons" />
                </Link>
                <Link to="/biking">
                    <BycIcon className="icons" />
                </Link>
            </nav>
            <footer>Copyright, SportSee 2020</footer>
        </aside>
    )
}

export default SideBar
