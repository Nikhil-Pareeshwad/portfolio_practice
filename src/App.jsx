import "./App.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB"
  ];

  const projects = [
    {
      title: "Attendance Management System",
      description:
        "A MERN stack application to manage student attendance."
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing skills and projects."
    },
    {
      title: "Weather App",
      description:
        "A React application that displays live weather data."
    }
  ];

  return (
    <div className="portfolio">

      {/* Hero Section */}
      <section className="hero">
        <h1>Nikhil Pareeshwad</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Passionate about building modern web applications
          using React, Node.js, and MongoDB.
        </p>
      </section>

      {/* About */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a web developer who enjoys creating responsive
          and user-friendly applications. I love learning new
          technologies and solving real-world problems.
        </p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>

        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>

        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <h2>Contact</h2>

        <p>Email: nikhilpareeshwad@gmail.com</p>
        <p>Phone: +91 8747068602</p>
        <p>Location: Tamil Nadu, India</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Nikhil Pareeshwad. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;