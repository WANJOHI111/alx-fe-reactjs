// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch a single user (from Task 1, keep this for profile lookup)
export async function fetchUserData(username) {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
}

// Advanced Search
export async function searchUsers(username, location, minRepos) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data;
}

