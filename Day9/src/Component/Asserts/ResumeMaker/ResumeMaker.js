import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './ResumeMaker.css';

export default function ResumeMaker() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    education: '',
    skills: '',
    academic: '',
    projects: '',
    engineering: '',
    experience: '',
    activities: '',
    honors: '',
    interests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    const resumeText = `
      Name:  ${resumeData.name}

      Email: ${resumeData.email}
      
      Education: ${resumeData.education}
      
      Skills: ${resumeData.skills}
      
      Academic: ${resumeData.academic}
      
      Projects: ${resumeData.projects}
      
      Engineering: ${resumeData.engineering}
      
      Experience: ${resumeData.experience}
      
      Activities: ${resumeData.activities}
      
      Honors: ${resumeData.honors}
      
      Interests: ${resumeData.interests}
    `;

    doc.text(resumeText, 10, 10);

    doc.save('JobSymphonyTools.pdf');
  };

  return (
    <div className="resume-maker-container">
      <h3>Resumes Engineered for Success.Create yours now!</h3>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={resumeData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={resumeData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Education:</label>
          <input type="text" name="education" value={resumeData.education} onChange={handleChange} />
        </div>
        <div>
          <label>Skills:</label>
          <input type="text" name="skills" value={resumeData.skills} onChange={handleChange} />
        </div>
        <div>
          <label>Academic:</label>
          <input type="text" name="academic" value={resumeData.academic} onChange={handleChange} />
        </div>
        <div>
          <label>Projects:</label>
          <input type="text" name="projects" value={resumeData.projects} onChange={handleChange} />
        </div>
        <div>
          <label>Engineering:</label>
          <input type="text" name="engineering" value={resumeData.engineering} onChange={handleChange} />
        </div>
        <div>
          <label>Experience:</label>
          <input type="text" name="experience" value={resumeData.experience} onChange={handleChange} />
        </div>
        <div>
          <label>Activities:</label>
          <input type="text" name="activities" value={resumeData.activities} onChange={handleChange} />
        </div>
        <div>
          <label>Honors:</label>
          <input type="text" name="honors" value={resumeData.honors} onChange={handleChange} />
        </div>
        <div>
          <label>Interests:</label>
          <input type="text" name="interests" value={resumeData.interests} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleDownload}>Download Resume</button>
      </form>
    </div>
  );
}
