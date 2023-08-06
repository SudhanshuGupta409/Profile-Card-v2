import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./img/Program.jpg" alt="program img" />;
}

function Intro() {
  return (
    <div>
      <h1>Sudhanshu Gupta</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        commodi porro explicabo ut non quasi quam eum delectus quae quidem.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill skill="HTML+CSS" emoji="💪" bgColor="red" />
      <Skill skill="JavaScript" emoji="💪" bgColor="yellow" />*/}

      {skills.map((skillDetails) => (
        <Skill skillObj={skillDetails} key={skillDetails.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div style={{ backgroundColor: skillObj.color }} className="skill">
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner"
          ? "👶"
          : skillObj.level === "intermediate"
          ? "👍"
          : "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
