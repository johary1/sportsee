import {
  getUserMockedActivity,
  getUserMockedAverageSessions,
  getUserMockedInfos,
  getUserMockedPerformance,
} from "../services/mockedData";

export const getUserMockedData = async (id) => {
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
