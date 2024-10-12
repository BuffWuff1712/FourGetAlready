// src/components/CourseDetails.tsx
import React from 'react';

interface CourseDetailsProps {
  content: string; // New prop to determine what content to display
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ content }) => {
  const courseDetails = {
    overview: {
      title: "Introduction to TypeScript",
      description: "This course covers the fundamentals of TypeScript, a typed superset of JavaScript.",
      instructor: "John Doe",
      duration: "4 weeks"
    },
    syllabus: [
      "Week 1: Getting Started with TypeScript",
      "Week 2: Type Annotations and Interfaces",
      "Week 3: Classes and Inheritance",
      "Week 4: Advanced Types and Generics"
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
        <>
          <h1>{courseDetails.overview.title}</h1>
          <p><strong>Instructor:</strong> {courseDetails.overview.instructor}</p>
          <p><strong>Duration:</strong> {courseDetails.overview.duration}</p>
          <h2>Description</h2>
          <p>{courseDetails.overview.description}</p>
        </>
      )}
      {content === 'syllabus' && (
        <>
          <h2>Syllabus</h2>
          <ul>
            {courseDetails.syllabus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
      {content === 'resources' && (
        <>
          <h2>Resources</h2>
          <p>{courseDetails.resources.description}</p>
          <a href={courseDetails.resources.link} target="_blank" rel="noopener noreferrer">
            Official Documentation
          </a>
        </>
      )}
      {content === 'contact' && (
        <>
          <h2>Contact Instructor</h2>
          <p>Email: {courseDetails.contact.email}</p>
        </>
      )}
    </div>
  );
};

export default CourseDetails;