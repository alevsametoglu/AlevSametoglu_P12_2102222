import React from "react";
import PropTypes from "prop-types";
import Activity from "../components/Activity/Activity";
import DurationSessions from "../components/DurationSessions/DurationSessions";
import Information from "../components/Information/Information";
import Performance from "../components/Performance/Performance";
import "./Dashbord.scss";
import Score from "../components/Score/Score";
const Dashbord = (props) => {
  return (
    <main style={{ margin: "auto" }}>
      <section className="profile">
        <h1>Bonjour ....</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className="container">
        <article className="container-chart">
          <div className="card-activity">{/* <Activity /> */}</div>
          <div className="cards-info">
            {/* <DurationSessions />
            <Information />
            <Score /> */}
          </div>
        </article>
        <article className="container-performance">
          <Performance />
          <Performance />
          <Performance />
          <Performance />
        </article>
      </section>
    </main>
  );
};

Dashbord.propTypes = {};

export default Dashbord;
