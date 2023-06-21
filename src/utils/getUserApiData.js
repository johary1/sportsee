import {
  getUserApiActivity,
  getUserApiAverageSessions,
  getUserApiInfos,
  getUserApiPerformance,
} from "../services/api";

export const getUserApiData = async (id) => {
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
