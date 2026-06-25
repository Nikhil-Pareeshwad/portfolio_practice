import "./App.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB Atlas"
  ];

  const projects = [
    {
      title: "Attendance Management System",
      description:
        "A full-stack MERN application that stores daily student attendance in MongoDB Atlas. Built using React.js, Node.js, Express.js, HTML, CSS, and JavaScript.",
      link: "https://attendance-system-kec-frontend.onrender.com"
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing skills, projects, and contact information.",
      link: "#"
    },
    {
      title: "Weather App",
      description:
        "A React application that displays live weather information using a weather API.",
      link: "#"
    }
  ];

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <h1>Nikhil Pareeshwad</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Passionate about building modern web applications using
          React.js, Node.js, Express.js, and MongoDB Atlas.
        </p>
      </section>

      {/* About */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a Full Stack Developer who enjoys creating responsive
          and user-friendly web applications. I love learning new
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

              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  View Live Project
                </a>
              )}
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