const API_BASE_URL = "http://localhost:3000";

export async function fetchUserData(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
}

export async function fetchUserActivity(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error("Failed to fetch user activity");
    }
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch user activity");
  }
}

export async function fetchUserAverageSessions(userId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/user/${userId}/average-sessions`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user average sessions");
    }
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch user average sessions");
  }
}

export async function fetchUserPerformance(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error("Failed to fetch user performance");
    }
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch user performance");
  }
}
