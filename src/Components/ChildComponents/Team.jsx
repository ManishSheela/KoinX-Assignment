import React from 'react';
import './Team.css'; // Import your CSS file for styling

const Team = () => {
  return (
    <div className="team-container">
      <h2>Team</h2>

      <p>
        Meet the talented individuals who make up our team. Each member contributes their skills and
        expertise to our success.
      </p>

      <div className="member">
        <div className="left-part">
          <img src="./p3.jpg" alt="Team Member 1" />
          <div className="member-info">
            <p>Name: John Doe</p>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div className="right-part">
          <p>
            John Doe is the visionary leader and founder of our company. With extensive experience in
            the industry, he drives our team towards excellence and innovation.
          </p>
        </div>
      </div>

      <div className="member">
        <div className="left-part">
          <img src="./p2.jpg" alt="Team Member 2" />
          <div className="member-info">
            <p>Name: Jane Smith</p>
            <p>Chief Technology Officer</p>
          </div>
        </div>
        <div className="right-part">
          <p>
            Jane Smith is a tech enthusiast and oversees our technology initiatives. Her expertise
            ensures our products are at the forefront of innovation.
          </p>
        </div>
      </div>

      <div className="member">
        <div className="left-part">
          <img src="./p1.jpg" alt="Team Member 3" />
          <div className="member-info">
            <p>Name: Alex Johnson</p>
            <p>Marketing Director</p>
          </div>
        </div>
        <div className="right-part">
          <p>
            Alex Johnson is a creative marketing professional. With a keen eye for trends, he
            spearheads our marketing strategies and brand presence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
