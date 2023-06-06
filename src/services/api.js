// Définition de l'URL de base de l'API
const baseURL = `http://localhost:3000/`;

/**
 * Récupère les activités d'un utilisateur
 * @param {string} id - L'identifiant de l'utilisateur
 * @returns {Array} - Les activités de l'utilisateur
 */
export const getUserActivity = async (id) => {
  try {
    // Utilisation de la fonction fetch pour effectuer une requête GET à l'API
    const res = await fetch(`${baseURL}user/${id}/activity`);
    // Conversion de la réponse en JSON
    const data = await res.json();
    // Renvoie les données reçues en réponse à la requête
    return data;
  } catch (e) {
    // En cas d'erreur lors de la requête, l'erreur est enregistrée dans la console
    console.error(e);
  }
};

/**
 * Récupère les informations d'un utilisateur
 * @param {string} id - L'identifiant de l'utilisateur
 * @returns {object} - Les informations de l'utilisateur
 */
export const getUserInfos = async (id) => {
  try {
    // Utilisation de la fonction fetch pour effectuer une requête GET à l'API
    const res = await fetch(`${baseURL}user/${id}`);
    // Conversion de la réponse en JSON
    const data = await res.json();
    // Renvoie les données reçues en réponse à la requête
    return data;
  } catch (e) {
    console.error(e);
  }
};

/**
 * Récupère les performances d'un utilisateur
 * @param {string} id - L'identifiant de l'utilisateur
 * @returns {object} - Les performances de l'utilisateur
 */
export const getUserPerformance = async (id) => {
  try {
    // Utilisation de la fonction fetch pour effectuer une requête GET à l'API
    const res = await fetch(`${baseURL}user/${id}/performance`);
    // Conversion de la réponse en JSON
    const data = await res.json();
    // Renvoie les données reçues en réponse à la requête
    return data;
  } catch (e) {
    console.error(e);
  }
};

/**
 * Récupère les sessions moyennes d'un utilisateur
 * @param {string} id - L'identifiant de l'utilisateur
 * @returns {object} - Les sessions moyennes de l'utilisateur
 */
export const getUserAverageSessions = async (id) => {
  try {
    // Utilisation de la fonction fetch pour effectuer une requête GET à l'API
    const res = await fetch(`${baseURL}user/${id}/average-sessions`);
    // Conversion de la réponse en JSON
    const data = await res.json();
    // Renvoie les données reçues en réponse à la requête
    return data;
  } catch (e) {
    console.error(e);
  }
};
