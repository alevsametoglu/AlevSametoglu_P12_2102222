import React, { useEffect, useState } from 'react'
import './DurationSessions.scss'
import { API } from '../../Api'
import PropTypes from 'prop-types'

import { LineChart, Line, XAxis, Tooltip } from 'recharts'

const days = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
}
const getDay = (indexDay) => {
    return days[indexDay]
}

const DurationSessions = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (props.userId)
            API.getUserAverageSessions(props.userId).then((response) => {
                setData(response.sessions)
                console.log(response)
            })
    }, [props.userId])
    console.log(data)

    return (
        <div className="duration-session">
            <header className="durationSessions__header">
                <h1>Durée moyenne des sessions</h1>
            </header>
            <LineChart
                className="duration-chart"
                width={250}
                height={150}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 20,
                    bottom: 0,
                }}
            >
                <XAxis
                    dataKey="day"
                    stroke="white"
                    tickLine={false}
                    dy={1}
                    tickFormatter={getDay}
                />

                <Tooltip
                    content={(pointInfo) => {
                        if (!pointInfo.active) return null
                        const pointData = data.find(
                            (x) => x.day === pointInfo.label
                        )

                        return (
                            <div className="tool">
                                {pointData.sessionLength} min
                            </div>
                        )
                    }}
                />

                <Line
                    className="line-information"
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="white"
                    dot={false}
                    activeDot={{ r: 7 }}
                />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </div>
    )
}
DurationSessions.propTypes = {
    userId: PropTypes.number,
}
export default DurationSessions
