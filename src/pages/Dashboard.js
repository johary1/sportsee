import React from "react";
import useFetchData from "../services/apiData";
//import { IS_MOCKED } from "../constants";
import "../pages/style/DashboardStyle.css";
import Error from "./Error";
import { LoaderWrapper, Loader } from "../utils/Loader";
import SideBar from "../components/SideBar/SideBar";
import Title from "../components/Title/Title";
import Nutrients from "../components/Nutrients/Nutrients";
import SessionsChart from "../components/SessionChart/SessionChart";
import PerformanceChart from "../components/PerformanceChart/PerformanceChart";
import ScoreChart from "../components/ScoreChart/ScoreChart";
import ActivityChart from "../components/ActivityChart/ActivityChart";
import DataSource from "../components/DataSource/DataSource";

import { useParams } from "react-router-dom";

/**
 * UserBoard is a function that returns a React Fragment that contains all the charts to be displayed from user data.
 * @returns A React Fragment. Main with aside and section containing all charts.
 */
export default function Dashboard() {
  /* userId is extracted from the url */
  const { userId } = useParams();

  /* customized hook is called to retrieve user data */
  const { userData, isLoading, error } = useFetchData(userId);

  /* on error, display error panel */
  if (error) {
    return <Error />;
  }

  /* if data loading, display loader. If not, data is available to display the full page */
  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <main className="main">
      <SideBar />
      <section className="user-container">
        <Title firstname={userData.getFirstName()} />
        <div className="all-charts-container">
          <div className="graphicals-container">
            <ActivityChart activityData={userData.getActivityData()} />
            <div className="squares-container">
              <SessionsChart sessionsData={userData.getSessionsData()} />
              <PerformanceChart
                performanceData={userData.getPerformanceData()}
              />
              <ScoreChart scoreData={userData.getScoreData()} />
            </div>
          </div>
          <Nutrients nutrientsData={userData.getNutrientData()} />
        </div>
      </section>
      <DataSource />
    </main>
  );
}
