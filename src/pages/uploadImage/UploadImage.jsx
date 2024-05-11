
import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      await axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image', formData, {
        headers: {
          apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
        },
      });
      setUploaded(true);
      setErrorMessage('');
    } catch (error) {
      setUploaded(false);
      setErrorMessage('Failed to upload image');
    }
  };

  return (

    <div className="container-upload position-fixed top-50 start-50 translate-middle d-flex row align-items-center justify-content-center">
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {uploaded && <p style={{ color: 'green' }}>Image uploaded successfully</p>}
      </form>
    </div>

  );
};

export default UploadImage;

