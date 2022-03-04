import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Activity from '../components/Activity/Activity'
import DurationSessions from '../components/DurationSessions/DurationSessions'
import Performance from '../components/Performance/Performance'
import Information from '../components/Information/Information'
import './Dashboard.scss'
import Score from '../components/Score/Score'
import { useParams } from 'react-router'
import { API } from '../Api'
import InformationList from '../components/Information/InformationList'

const Dashbord = (props) => {
    const params = useParams()

    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        API.getUser(params.id).then((res) => {
            console.log(res)
            setUserInfo({
                userId: res.id,
                name: res.userInfos.firstName,
                calorie: res.keyData.calorieCount,
                protein: res.keyData.proteinCount,
                glucoside: res.keyData.carbohydrateCount,
                lipid: res.keyData.lipidCount,
            })
        })
    }, [params.id])
    console.log(userInfo)
    return (
        <main className="main-container">
            <section className="profile">
                <h1>
                    Bonjour <span>{userInfo?.name}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
            <section className="container">
                <article className="container-chart">
                    <Activity userId={userInfo?.userId} />
                    <div className="cards-info">
                        <DurationSessions userId={userInfo?.userId} />
                        <Performance userId={userInfo?.userId} />
                        <Score userId={userInfo?.userId} />
                    </div>
                </article>
                <article className="container-information">
                    <InformationList
                        calorie={userInfo?.calorie}
                        protein={userInfo?.protein}
                        glucoside={userInfo?.glucoside}
                        lipid={userInfo?.lipid}
                    />
                </article>
            </section>
        </main>
    )
}

Dashbord.propTypes = {}

export default Dashbord
