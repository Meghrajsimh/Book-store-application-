import React, { useState } from 'react';
import './EditProfilePage.css'; //

const EditProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea value={bio} onChange={handleBioChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfilePage;
