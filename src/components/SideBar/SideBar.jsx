import React from 'react'
import PropTypes from 'prop-types'
import './SideBar.scss'
import { ReactComponent as YogaIcon } from '../../assets/images/YogaIcon.svg'
import { ReactComponent as SwimIcon } from '../../assets/images/SwimIcon.svg'
import { ReactComponent as BodyBuildIcon } from '../../assets/images/BodyBuildIcon.svg'
import { ReactComponent as BycIcon } from '../../assets/images/BycIcon.svg'
import { Link } from 'react-router-dom'

const SideBar = (props) => {
    return (
        <aside className="side-bar">
            <nav>
                <Link to="./yoga">
                    <YogaIcon className="icons" />
                </Link>
                <Link to="swimming">
                    <SwimIcon className="icons" />
                </Link>
                <Link to="./bodyBuilding">
                    <BodyBuildIcon className="icons" />
                </Link>
                <Link to="biking">
                    <BycIcon className="icons" />
                </Link>
            </nav>
            <footer>Copyright, SportSee 2020</footer>
        </aside>
    )
}

SideBar.propTypes = {}

export default SideBar
