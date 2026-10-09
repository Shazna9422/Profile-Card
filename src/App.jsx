
import React from "react";
import StudentCard from "./Components/StudentCard";
import "./App.css";

function App() {
  const students = [
    {
      id: 1,
      name: "John David",
      age: 22,
      course: "React JS",
      email: "john@example.com",
      phone: "0771234567",
      college: "ABC Institute",
      image: "https://i.pravatar.cc/150?img=12",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 2,
      name: "Ayesha Khan",
      age: 21,
      course: "Web Development",
      email: "ayesha@example.com",
      phone: "0765678901",
      college: "South East College",
      image: "https://i.pravatar.cc/150?img=47",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 3,
      name: "Rizwan Ahmed",
      age: 23,
      course: "MERN Stack",
      email: "rizwan@example.com",
      phone: "0779988776",
      college: "Tech Institute",
      image: "https://i.pravatar.cc/150?img=11",
      skills: ["HTML", "CSS", "Node.js", "React"],
    },
  ];

  return (
    <div className="app">
      <header className="page-header">
        <h1>Student Profile Cards</h1>
        <p>Meet our students and explore their skills</p>
      </header>

      <div className="student-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
