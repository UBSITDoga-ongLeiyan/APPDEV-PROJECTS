import React, { useState } from "react";


const DeveloperPage = () => {
  const [developers, setDevelopers] = useState([
    { id: 1, name: "Leiyan Doga-ong", role: "Full-Stack Developer", vouches: 0 },
    { id: 2, name: "Demetrio Codiaman", role: "UI/UX Designer", vouches: 0 },
  ]);

  const handleVouch = (id) => {
    setDevelopers((prev) =>
      prev.map((dev) =>
        dev.id === id ? { ...dev, vouches: dev.vouches + 1 } : dev
      )
    );
  };

  return (
    <div className="container">
      <h2>Meet the Developers</h2>
      <div className="developer-list">
        {developers.map((developer) => (
          <div key={developer.id} className="developer-card">
            <h3>{developer.name}</h3>
            <p>Role: {developer.role}</p>
            <p>Vouches: {developer.vouches}</p>
            <button onClick={() => handleVouch(developer.id)}>Vouch</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperPage;
