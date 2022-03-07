import React, { useEffect, useState } from 'react'
import './Performance.scss'
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import { API } from '../../Api'

const kind = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio',
}
/**@function for get kind
 *
 * @param {number} indexKind
 * @returns (index of kind)
 */

const getKind = (indexKind) => {
    return kind[indexKind]
}
/**@function for  showing activity types as radar chart
 * @component
 * @param {number} userId
 * @returns (<Performance/>)
 */
const Performance = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        if (props.userId) {
            API.getUserPerformance(props.userId).then((response) => {
                setData(response.data)
                console.log(response)
            })
        }
    }, [props.userId])

    return (
        <RadarChart
            className="radar-chart"
            cx={130}
            cy={130}
            outerRadius={90}
            width={250}
            height={250}
            data={data}
            dy={5}
            stroke="#FFFFFF"
        >
            <PolarGrid />
            <PolarAngleAxis
                className="text-information"
                stroke="white"
                dataKey="kind"
                domain={[0, 250]}
                axisLine={false}
                tickCount={6}
                tickFormatter={getKind}
            />

            <Radar
                name="Mike"
                dataKey="value"
                stroke="none"
                fill="red"
                fillOpacity={0.6}
            />
        </RadarChart>
    )
}

export default Performance

Performance.propTypes = {
    userId: PropTypes.number,
}
