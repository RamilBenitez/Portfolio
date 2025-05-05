import React, { useEffect, useRef } from 'react';
import './Experiences.css';
import workImg from './images/Profile.jpg';
import leadershipImg from './images/Profile.jpg';
import volunteerImg from './images/Profile.jpg';

const Experiences = () => {
  const experienceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const experiences = [
    {
      title: "Work Experience",
      image: workImg,
      items: [
        {
          role: "Frontend Developer",
          company: "Tech Solutions Inc.",
          period: "2021 - Present",
          description: "Developed responsive web applications using React.js and implemented state management with Redux."
        },
        {
          role: "UI/UX Designer",
          company: "Creative Agency",
          period: "2019 - 2021",
          description: "Designed user interfaces for mobile and web applications, creating wireframes and prototypes."
        }
      ]
    },
    {
      title: "Leadership Experiences",
      image: leadershipImg,
      items: [
        {
          role: "Team Lead",
          company: "Developer Community",
          period: "2020 - 2022",
          description: "Led a team of 5 developers in building open-source projects and organizing coding workshops."
        },
        {
          role: "Project Manager",
          company: "Student Council",
          period: "2018 - 2019",
          description: "Managed campus-wide tech initiatives and coordinated between multiple student organizations."
        }
      ]
    },
    {
      title: "Volunteering",
      image: volunteerImg,
      items: [
        {
          role: "Mentor",
          company: "Coding Bootcamp",
          period: "2021 - Present",
          description: "Volunteered as a mentor helping beginners learn web development fundamentals."
        },
        {
          role: "Organizer",
          company: "Tech for Good",
          period: "2020 - 2021",
          description: "Organized charity hackathons to develop solutions for local non-profit organizations."
        }
      ]
    }
  ];

  return (
    <section id="experiences" className="experiences-section">
      <h2 className="section-title">Experiences</h2>
      <div className="experiences-container">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            ref={el => experienceRefs.current[index] = el}
            className={`experience-card ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
          >
            <div className="experience-image-container">
              <img src={exp.image} alt={exp.title} className="experience-image" />
            </div>
            <div className="experience-content">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-items">
                {exp.items.map((item, i) => (
                  <div key={i} className="experience-item">
                    <h4 className="item-role">{item.role}</h4>
                    <div className="item-meta">
                      <span className="item-company">{item.company}</span>
                      <span className="item-period">{item.period}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;