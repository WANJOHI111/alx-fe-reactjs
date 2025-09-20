// src/services/githubService.js
import api from "./api";

export async function fetchUserData(username) {
  const response = await api.get(`/users/${username}`);
  return response.data;
}
