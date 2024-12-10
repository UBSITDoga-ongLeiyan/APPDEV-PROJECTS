import React from "react";
import { useParams } from "react-router-dom";

const employeeData = {
  1: {
    name: 'Alice Johnson',
    position: 'Software Engineer',
    qualifications: 'B.S. in Computer Science, 4 years experience in software development.'
  },
  2: {
    name: 'Bob Smith',
    position: 'Product Manager',
    qualifications: 'MBA, 6 years in product management and strategy.'
  },
  3: {
    name: 'Charlie Brown',
    position: 'UI/UX Designer',
    qualifications: 'B.A. in Graphic Design, 5 years in user interface design.'
  },
  4: {
    name: 'Diana Green',
    position: 'Marketing Specialist',
    qualifications: 'B.A. in Marketing, 3 years experience in digital marketing.'
  },
  5: {
    name: 'Ethan White',
    position: 'Operations Manager',
    qualifications: 'B.S. in Business Administration, 7 years in operations management.'
  },
};

const EmpResume = () => {
  const { id } = useParams();
  const employee = employeeData[id];

  if (!employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <div className="container">
      <h2>{employee.name}</h2>
      <p>Position: {employee.position}</p>
      <h3>Qualifications</h3>
      <p>{employee.qualifications}</p>
    </div>
  );
};

export default EmpResume;