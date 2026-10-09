
import React from "react";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <div className="card-header">
        

        <div>
          <h2>{student.name}</h2>
          <span className="course">{student.course}</span>
        </div>
      </div>

      <div className="student-details">
        <p>🎂 <strong>Age:</strong> {student.age}</p>
        <p>📧 <strong>Email:</strong> {student.email}</p>
        <p>📞 <strong>Phone:</strong> {student.phone}</p>
        <p>🏫 <strong>College:</strong> {student.college}</p>
      </div>

      <div className="skills-section">
        <h3>Skills</h3>

        <ul className="skills-list">
          {student.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentCard;
