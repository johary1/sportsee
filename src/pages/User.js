import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import UserInfos from "../components/UserInfos";
import {
  Main,
  Container,
  Content,
  BottomChart,
} from "../customizeComponents/userStyle";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";
import BarCharts from "../components/BarChart";
import ScoreChart from "../components/ScoreChart";
import KeyData from "../components/KeyData";
import UserAverageSessions from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";

import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
} from "../services/api";

import {
  getUserData,
  getUserActivity as getMockedUserActivity,
  getUserAverageSessions as getMockedUserAverageSessions,
  getUserInfos as getMockedUserInfos,
  getUserPerformance as getMockedUserPerformance,
} from "../utils/getUserData";

const baseURL = `http://localhost:3000/`;

export default function User() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [useMockData, setUseMockData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response;

      if (useMockData) {
        response = await getUserDataFromMock(id);
        console.log(response);
      } else {
        response = await getUserDataFromAPI(id);
      }

      if (!response || !response.data) {
        navigate("/Error");
        return;
      }

      setData(response.data);
    };

    fetchData();
  }, [id, navigate, useMockData]);

  const getUserDataFromAPI = async (id) => {
    try {
      const response = await Promise.all([
        getUserActivity(id),
        getUserAverageSessions(id),
        getUserInfos(id),
        getUserPerformance(id),
      ]);

      const [activity, averageSessions, userInfos, performance] = response;

      return {
        data: {
          activity,
          averageSessions,
          userInfos,
          performance,
        },
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getUserDataFromMock = async (id) => {
    try {
      const response = await Promise.all([
        getMockedUserActivity(id),
        getMockedUserAverageSessions(id),
        getMockedUserInfos(id),
        getMockedUserPerformance(id),
      ]);

      const [activity, averageSessions, userInfos, performance] = response;

      return {
        data: {
          activity,
          averageSessions,
          userInfos,
          performance,
        },
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  if (!data || data.length === 0) return null;

  const toggleMockData = () => {
    setUseMockData(!useMockData);
  };

  return (
    <Main>
      <SideBar />
      <Container>
        <UserInfos name={data.userInfos.firstName} />
        <Content>
          <section>
            <BarCharts />
            <BottomChart>
              <UserAverageSessions />
              <UserPerformance />
              <ScoreChart data={data} />
            </BottomChart>
          </section>
          <aside>
            <KeyData
              icon={caloriesIcon}
              info={`${data.keyData.calorieCount.toLocaleString()}kCal`}
              text="Calories"
            />

            <KeyData
              icon={proteinsIcon}
              info={`${data.keyData.proteinCount}g`}
              text="Proteines"
            />
            <KeyData
              icon={glucidesIcon}
              info={`${data.keyData.carbohydrateCount}g`}
              text="Glucides"
            />
            <KeyData
              icon={lipidesIcon}
              info={`${data.keyData.lipidCount}g`}
              text="Lipides"
            />
          </aside>
          <button onClick={toggleMockData}>
            {useMockData ? "Switch to API Data" : "Switch to Mock Data"}
          </button>
        </Content>
      </Container>
    </Main>
  );
}
