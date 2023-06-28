/**
 * Creates a new USER.
 * @class
 */
class UserModel {
  constructor(main, activity, sessions, performance) {
    this.userId = main.id;
    this.firstName = main.userInfos.firstName;
    this.nutrients = main.keyData;
    main.score ? (this.score = main.score) : (this.score = main.todayScore);
    this.activities = activity.sessions;
    this.performance = performance.data;
    this.sessions = sessions.sessions;
  }

  getFirstName = () => {
    return this.firstName;
  };

  getActivityData = () => {
    return this.activities;
  };

  getSessionsData = () => {
    return this.sessions;
  };

  getPerformanceData = () => {
    return this.performance;
  };

  getScoreData = () => {
    return this.score;
  };

  getNutrientData = () => {
    return this.nutrients;
  };
}

export default UserModel;
