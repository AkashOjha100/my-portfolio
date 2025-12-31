import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'Java', 'Spring Boot', 'MySQL'];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;