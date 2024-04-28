import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useLogoutGet = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout',
        {
          headers: {
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBnbWFpbC5jb20iLCJ1c2VySWQiOiJmNzdiODU5My0xNDYzLTRmMzUtOGZkYS0zMzVmOTk0ZTlhZGYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTIzMjQ5NDN9.CT-qSmsXHHDyZzjJZFjmE47VLSzBUiZL3g3vTEHQlrQ',
          },
        }
      );
      console.log(res);

      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('role');

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return handleLogout;
};

export default useLogoutGet;
