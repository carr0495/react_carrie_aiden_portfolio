const BASE_URL = "https://api.github.com/users/";

async function githubAccount(username) {
  const url = `${BASE_URL}${username}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}

export async function fetchGithubProfile(username) {
  const data = await githubAccount(username);
  return data;
}
