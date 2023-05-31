class User {
  constructor(id, firstName, lastName, age, score, keyData) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.score = score;
    this.keyData = keyData;
  }
}

class UserActivity {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }

  formatSessionsForCharts() {
    return this.sessions.map((session) => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}

class UserAverageSessions {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }

  formatAverageSessionsForCharts() {
    return this.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));
  }
}

class UserPerformance {
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }

  formatPerformanceForCharts() {
    return this.data.map((performance) => ({
      value: performance.value,
      kind: this.kind[performance.kind],
    }));
  }
}

module.exports = {
  User,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
};
