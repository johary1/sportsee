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
  getUserApiActivity,
  getUserApiAverageSessions,
  getUserApiInfos,
  getUserApiPerformance,
} from "../services/api";

import {
  getUserMockedActivity,
  getUserMockedAverageSessions,
  getUserMockedInfos,
  getUserMockedPerformance,
} from "../services/mock";

import { IS_MOCK } from "../constants";

//const baseURL = `http://localhost:3000/`;

export default function User() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let response;

      if (IS_MOCK) {
        response = await getUserMockedData(id);
        console.log(response);
      } else {
        response = await getUserApiData(id);
      }

      if (!response || !response.data) {
        navigate("/Error");
        return;
      }

      setData(response.data);
    };

    fetchData();
  }, [id, navigate]);

  const getUserApiData = async (id) => {
    try {
      const response = await Promise.all([
        getUserApiActivity(id),
        getUserApiAverageSessions(id),
        getUserApiInfos(id),
        getUserApiPerformance(id),
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

  const getUserMockedData = async (id) => {
    try {
      const response = await Promise.all([
        getUserMockedActivity(id),
        getUserMockedAverageSessions(id),
        getUserMockedInfos(id),
        getUserMockedPerformance(id),
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
        </Content>
      </Container>
    </Main>
  );
}
