function App() {
  return (
    <>
      <nav>
        <h2 className="logo">Prasanna</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <h1>Hi, I'm <span>Prasanna</span></h1>
        <p>Software Developer | Python | Flask | React | Full Stack Developer</p>
        <a href="#contact" className="btn">Hire Me</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m a passionate software developer who loves building modern and scalable web applications.
          I specialize in Python, Flask, React, and frontend technologies with a strong focus on clean UI and efficient backend logic.
          I also have experience working on IoT-based real-world problem-solving projects.
        </p>
      </section>

      <section id="skills" className="section dark">
        <h2>Skills</h2>
        <div className="skills">
          <span>Java</span>
          <span>Python</span>
          <span>Flask</span>
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>SQL</span>
          <span>Power BI</span>
          <span>IoT</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="cards">

          <div className="card">
            <h3>Innovators HUB Music App</h3>
            <p>
              A modern music streaming web application built using React and Tailwind CSS.
              Designed with a responsive UI and interactive music controls.
            </p>
          </div>

          <div className="card">
            <h3>JioSaavn Clone</h3>
            <p>
              A functional clone of JioSaavn developed using React.
              Includes playlist interface and dynamic music player UI.
            </p>
          </div>

          <div className="card">
            <h3>Recipe Web Application</h3>
            <p>
              A full-stack recipe management system built with Flask and Python.
              Users can browse, add, and manage recipes dynamically.
            </p>
          </div>

          <div className="card">
            <h3>EcoBin – IoT Smart Waste System</h3>
            <p>
              An IoT-based waste segregation project that separates waste based on degradability
              and converts biodegradable waste into biogas.
            </p>
          </div>

          <div className="card">
            <h3>Scientific Calculator</h3>
            <p>
              A web-based calculator developed using HTML, CSS, and JavaScript.
              Supports both basic and advanced mathematical operations.
            </p>
          </div>

        </div>
      </section>

      <section id="contact" className="section dark">
        <h2>Contact Me</h2>
        <p>Email: prasanna.l1010@email.com</p>
        <p>GitHub: https://github.com/PRASANNA-LP10</p>
        <p>LinkedIn: https://www.linkedin.com/in/prasannal10/</p>
      </section>

      <footer>
        <p>© 2026 Prasanna. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;