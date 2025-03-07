import { useState } from "react";
import axios from "axios";

const API_URL = "https://api.github.com/users";

function GithubSchoolProject() {
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`${API_URL}/${username}`)
      .then((response) => {
        const data = response.data;
        setRepositories(data.repositories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Github Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      {repositories.map((repository) => (
        <div key={repository.id}>
          <h2>{repository.name}</h2>
          <p>{repository.description}</p>
          <a href={repository.html_url} target="_blank" rel="noreferrer">Visit repository</a>
        </div>
      ))}
    </div>
  );
}
