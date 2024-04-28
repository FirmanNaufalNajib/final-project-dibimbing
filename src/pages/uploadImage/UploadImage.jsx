// const UploadImage = () => {
// const [image, setImage] = useState(null);
// const [imagePreview, setImagePreview] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);


// const handleImageChange = (e) => {
//   const file = e.target.files[0];
//   setImage(file);
//   setImagePreview(URL.createObjectURL(file));
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setError(null);

// }


//   return (
//     <div>upload image</div>
//   )
// }

// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadImage = () => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [uploading, setUploading] = useState(false);

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('image', file);

//     try {
//       setUploading(true);
//       const response = await axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image', formData, {
//         headers: {
//           {
//             apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ'
//         }
//         },
//       });
//       setImageUrl(response.data.imageUrl);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Image</h2>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//       />
//       {uploading && <p>Uploading...</p>}
//       {imageUrl && (
//         <div>
//           <h3>Preview:</h3>
//           <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadImage;


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

