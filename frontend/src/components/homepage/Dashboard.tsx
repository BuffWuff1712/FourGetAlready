// Dashboard.tsx
import React from 'react';
import Placard from './Placard';
import DescriptionContainer from './DescriptionContainer';
import '../../assets/styles/Dashboard.css'
import MainCard from './MainCard';
import LearningInput from '../LearningInput';

interface Course {
  title: string;
  code: string;
}

const Dashboard: React.FC = () => {
  const ongoingCourses: Course[] = [
    { title: 'React & Redux Complete Course 2024', code: 'CS1010'},
    { title: 'CSS Full Course 2025', code: 'CS1010' },
    { title: 'CSS Full Course 2025', code: 'CS1010' },
    { title: 'Python Full Course 2025', code: 'CS1010' }
  ];

  return (
    <div className="dashboard">
      <LearningInput />
      <MainCard 
        title='Explore Your Potential at PSA' 
        description='Unlock a journey to discover how you can thrive at PSA with tailored insights powered by AI.' 
      />
      <h3>Recommended Courses</h3>
      <div className="placards">
        <Placard title="CSS Full Course 2025" courseCode='CS1010' category='Software' backgroundColor="#FF5733"/>
        <Placard title="Python Full Course 2025" courseCode='PY1010' category='Software'/>
        <Placard title="Software Engineering" courseCode='CS2103' category='Software' backgroundColor="#FF5733"/>
        <Placard title="Data Analysis with R" courseCode='DSA1010' category='Data Analysis'/>
      </div>

      <div className="student-list">
        <h3>Ongoing courses</h3>
          {ongoingCourses.map((course, index) => (
            <DescriptionContainer title={course.title} courseCode={course.code} category='nil'/>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
