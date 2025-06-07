import React from 'react';
import './personalInfo.css';

const PersonalInfo = () => {
  const teamMembers = [
    {
      name: 'Aceron, Ramuel',
      image: '/images/ramuel.jpg',
    },
    {
      name: 'Belicina, Andrei Lester',
      image: '/images/andrei.jpg',
    },
    {
      name: 'Betasa, Mark Ian',
      image: '/images/mark.jpg',
    },
    {
      name: 'Crisostomo, Joshua',
      image: '/images/joshua.jpg',
    },
    {
      name: 'Dela Cruz, Clarence Kieth',
      image: '/images/klay.jpg',
    },
    {
      name: 'Diaz, Jestro',
      image: '/images/jestro.jpg',
    },
    {
      name: 'Egana, Mary Elizabeth',
      image: '/images/mary.jpg',
    },
    {
      name: 'Geva, Nino Mynel',
      image: '/images/mynel.jpg',
    },
    {
      name: 'Lauron, Clarnece Cristopher',
      image: '/images/lauron.jpg',
    },
  ];

  return (
    <div className="about-container">
      <div className="about-box">
        <h2 className="about-title">PERSONAL INFORMATION</h2>
        <div className="profile-grid">
          {teamMembers.map((member, index) => (
            <div className="profile-card" key={index}>
              <img
                src={member.image}
                alt={`${member.name} Profile`}
                className="profile-image"
              />
              <div className="profile-text">
                <h3 className="profile-name">{member.name.toUpperCase()}</h3>
                <p className="profile-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus purus, feugiat at mi eu, dapibus ultrices sem. Proin in tellus orci, aliquet eu leo vitae, rutrum fermentum nulla.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
