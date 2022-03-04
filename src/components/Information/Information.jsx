import React from 'react'
import './Information.scss'
import PropTypes from 'prop-types'

const Information = (props) => {
    return (
        <div className="information">
            {props.icon}
            <div>
                <span className="info-value"> {props.value}</span>
                <span className="info-title"> {props.title}</span>
            </div>
        </div>
    )
}

Information.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default Information
