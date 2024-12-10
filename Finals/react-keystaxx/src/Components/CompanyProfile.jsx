import React from "react";
import { Link } from "react-router-dom";

const CompanyProfile = () => {
  const employees = [
    { id: 1, name: "Linus Torvalds", position: "Software Engineer" },
    { id: 2, name: "Ken Norton", position: "Product Manager" },
    { id: 3, name: "Julie Zhuo", position: "UI/UX Designer" },
    { id: 4, name: "Neil Patel", position: "Marketing Specialist" },
    { id: 5, name: "Jack Welch", position: "Operations Manager" },
  ];

  return (
    <div className="container">
      <h2>Company Profile</h2>
      <h3>Meet Our Team</h3>
      <ul className="employee-list">
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/resume/${employee.id}`}>
              <h4>{employee.name}</h4>
              <p>Position: {employee.position}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyProfile;