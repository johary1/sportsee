import { useState, useEffect } from "react";
import User from "../datamodel/UserModel";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../services/mockedData";

import { IS_MOCKED } from "../constants";

/**
 * Récupère les données utilisateur à partir de l'API ou des données simulées
 * @function useFetchData
 * @param {string} id - L'ID de l'utilisateur
 * @returns {Object} - Les données utilisateur, l'état de chargement et l'erreur
 */
export function useFetchData(id) {
  const server = "http://localhost:3000";

  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /**
   * Vérifie si les données utilisateur sont valides
   * @function isValidData
   * @param {Array} userData - Les données utilisateur
   * @returns {boolean} - Si les données sont valides ou non
   */
  function isValidData(userData) {
    return !userData.some((data) => !data.data || data === "can not get user");
  }

  useEffect(() => {
    if (IS_MOCKED) {
      const mainDataMocked = USER_MAIN_DATA;
      const activityDataMocked = USER_ACTIVITY;
      const sessionsDataMocked = USER_AVERAGE_SESSIONS;
      const performanceDataMocked = USER_PERFORMANCE;

      const userMainDataMocked = mainDataMocked.find(
        (element) => element.id.toString() === id
      );
      const userActivityDataMocked = activityDataMocked.find(
        (element) => element.userId.toString() === id
      );
      const userSessionsDataMocked = sessionsDataMocked.find(
        (element) => element.userId.toString() === id
      );
      const userPerformanceDataMocked = performanceDataMocked.find(
        (element) => element.userId.toString() === id
      );

      if (
        !userMainDataMocked ||
        !userActivityDataMocked ||
        !userSessionsDataMocked ||
        !userPerformanceDataMocked
      ) {
        setError(true);
      } else {
        setUserData(
          new User(
            userMainDataMocked,
            userActivityDataMocked,
            userSessionsDataMocked,
            userPerformanceDataMocked
          )
        );
        setLoading(false);
      }
    } else {
      const urls = [
        `${server}/user/${id}`,
        `${server}/user/${id}/activity`,
        `${server}/user/${id}/average-sessions`,
        `${server}/user/${id}/performance`,
      ];

      Promise.all(urls.map((url) => fetch(url)))
        .then((res) => Promise.all(res.map((r) => r.json())))
        .then((mainData) => {
          if (isValidData(mainData)) {
            setUserData(new User(...mainData.map((data) => data.data)));
          } else {
            setError(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  return { userData, isLoading, error };
}

export default useFetchData;
