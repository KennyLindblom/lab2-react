import React, { useState, useEffect } from 'react';
import './Project.css';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/KennyLindblom/repos')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setRepos(data);
          setIsLoading(false);
        }, 6000);
      });
  }, []);

  if (isLoading) {
    <div className='loader'></div>
    console.log('Objects are being loaded')
    return <div className='Loading'>Loading...</div>;
    
    
    
    
    
  }

  return (
    <div className="projects">
      <h1>My Projects</h1>
      {repos.map(repo => (
        <div className="card" key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <a href={repo.html_url}>View on GitHub</a>
        </div>
      ))}
    </div>
  );
}