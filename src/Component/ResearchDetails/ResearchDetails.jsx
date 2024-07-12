import React from 'react';

const ResearchDetails = ({username,department,enrollmentNo,graduationYear,githubLink,linkedinLink,email,phone ,researchName,}) => {
  return (
    <div className="researcher-details">
      <img src="src/th.jpeg" alt="Researcher" className="profile-picture" />
      <div className="researcher-info">
        <h2>{username}</h2>
          <p>{[department ,enrollmentNo]}</p>
           <p>25K VIEWS</p>
            <p>15K LIKES</p>
            <p><b>Graduation year:</b>{graduationYear}</p>
      </div>
      <div className="contact-info">
       <p><b>PHONE NO.:</b>{phone}</p>
        <p><b>Email ID: </b>{email}</p>
        <p><b>LinkedIn ID:</b>{linkedinLink}</p>
        <p><b>Github ID :</b>{githubLink}</p>
        <p><b>RESEARCH NAME:</b> {researchName}</p>

      </div>
    </div>
  );
};

export default ResearchDetails;