import React from 'react';

interface CourseDetailsProps {
  content: string;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ content }) => {
  const courseDetails = {
    overview: {
      title: "Introduction to TypeScript",
      description: "This course covers the fundamentals of TypeScript, a typed superset of JavaScript that compiles to plain JavaScript. You will learn about its features, best practices, and how to integrate it into your workflow.",
      instructor: "John Doe",
      duration: "4 weeks"
    },
    syllabus: [
      { week: "Week 1", topic: "Getting Started with TypeScript" },
      { week: "Week 2", topic: "Type Annotations and Interfaces" },
      { week: "Week 3", topic: "Classes and Inheritance" },
      { week: "Week 4", topic: "Advanced Types and Generics" }
    ],
    resources: {
      link: "https://www.typescriptlang.org/docs/",
      description: "Official TypeScript Documentation"
    },
    contact: {
      email: "john.doe@example.com",
    }
  };

  return (
    <div className="course-details">
      {content === 'overview' && (
        <div className="details-section">
          <h1 className="course-title">{courseDetails.overview.title}</h1>
          <p className="course-info"><strong>Instructor:</strong> {courseDetails.overview.instructor}</p>
          <p className="course-info"><strong>Duration:</strong> {courseDetails.overview.duration}</p>
          <h2>Description</h2>
          <p className="course-description">{courseDetails.overview.description}</p>
        </div>
      )}
      {content === 'syllabus' && (
        <div className="details-section">
          <h2>Syllabus</h2>
          <table className="syllabus-table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Topic</th>
              </tr>
            </thead>
            <tbody>
              {courseDetails.syllabus.map((item, index) => (
                <tr key={index}>
                  <td>{item.week}</td>
                  <td>{item.topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {content === 'resources' && (
        <div className="details-section">
          <h2>Resources</h2>
          <p>{courseDetails.resources.description}</p>
          <a
            className="resource-link"
            href={courseDetails.resources.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Documentation
          </a>
        </div>
      )}
      {content === 'contact' && (
        <div className="details-section">
          <h2>Contact Instructor</h2>
          <p className="course-info">Email: {courseDetails.contact.email}</p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
