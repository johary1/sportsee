import React from "react";
import { useState, useEffect } from "react";
import { getUserData } from "../utils/getUserData";
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

/**Render the dashboard
 * @return {JSX}
 */
export default function User() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserData("USER_MAIN_DATA", id);
      if (!response || !response.data) {
        navigate("/Error");
        return;
      }
      setData(response.data);
    };
    fetchData();
  }, [id, navigate]);

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
